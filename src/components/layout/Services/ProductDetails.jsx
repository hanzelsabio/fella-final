import React, { useState, useMemo, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";

import Footer from "../Footer/Footer";
import Button from "../../common/Button";
import slugify from "../../helper/slugify";

import "./product.css";

function ProductDetails() {
  const { slug } = useParams();
  const { products, services } = useProducts();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const allProducts = [...products, ...services];

  // Find product by slug
  const product = useMemo(
    () => allProducts.find((p) => slugify(p.title) === slug),
    [allProducts, slug]
  );

  // States
  const [isFading, setIsFading] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState(
    location.state?.color?.name || null
  );

  // Compute selected swatch
  const selectedSwatch = useMemo(() => {
    if (!product || !selectedColorName) return null;
    return product.colorways?.find((c) => c.name === selectedColorName);
  }, [product, selectedColorName]);

  // Initialize default color
  useEffect(() => {
    if (!product?.colorways?.length) return;

    const black = product.colorways.find(
      (c) => c.name.toLowerCase() === "black"
    );
    const defaultColor = location.state?.color || black || product.colorways[0];

    setSelectedColorName(defaultColor.name);
    setActiveImage(defaultColor.image || product.image);
  }, [product, location.state]);

  const thumbnails = useMemo(() => {
    if (!product) return [];
    return product.images?.length ? product.images : [product.image];
  }, [product]);

  // Open modal and update URL
  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  // Reset scroll and modal on product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedService(null);
    setSearchParams({});
  }, [slug, setSearchParams]);

  // Recently viewed products
  useEffect(() => {
    if (!product) return;
    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const updated = stored.filter((p) => String(p.id) !== String(product.id));
    updated.unshift({
      id: product.id,
      title: product.title,
      image: product.image,
    });
    localStorage.setItem("recentlyViewed", JSON.stringify(updated.slice(0, 5)));
    setRecentlyViewed(updated.slice(0, 5));
  }, [product]);

  // Restore modal state from URL
  useEffect(() => {
    if (!services.length) return;
    const serviceSlug = searchParams.get("service");
    const service = services.find((s) => slugify(s.title) === serviceSlug);
    setSelectedService(service || null);
  }, [services, searchParams]);

  // Loading and error handling
  if (!products.length && !services.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product_section flex justify-center items-center h-screen">
        <p>Product not found.</p>
      </div>
    );
  }

  // Featured products
  const featured = useMemo(() => {
    return products
      .filter((p) => slugify(p.title) !== slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [products, slug]);

  const handleProductClick = (item) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(`/product/${slugify(item.title)}`);
      setIsFading(false);
    }, 300);
  };

  const handleGetQuote = () => {
    navigate("/contact-form", { state: { service: selectedService, product } });
  };

  // Services
  const clothingLineService20 = services.find((s) =>
    s.title.toLowerCase().includes("20 pcs clothing")
  );
  const noMinimumService = services.find((s) =>
    s.title.toLowerCase().includes("no minimum")
  );

  return (
    <div className="product_section">
      <div
        className={`transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Product Details */}
        <section className="product_details_section max-w-6xl mx-auto py-10 md:py-20 px-8 sm:px-20">
          <div className="product_details_body grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="product_details_image_block flex flex-col items-center">
              <div className="product_details_default_image flex flex-col items-center gap-4">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={product.title}
                    className="w-full max-w-md drop-shadow-[0px_25px_25px_rgba(0,0,0,0.5)] object-contain"
                  />
                )}

                {/* Thumbnails */}
                {thumbnails.length > 1 && (
                  <div className="product_details_thumbnail flex overflow-x-auto max-w-lg scrollbar-hide">
                    {thumbnails.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className="flex-shrink-0 p-1 transition-all"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-30 h-30 object-contain drop-shadow-md"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="product_details_content_block space-y-4 lg:text-left">
              <h1 className="text-center text-xl md:text-2xl font-medium text-gray-800 py-10">
                {product.title}
              </h1>

              {/* Colorway Swatches */}
              {product.colorways?.length > 0 && (
                <div className="flex flex-wrap items-center gap-4">
                  {/* Label */}
                  <p className="text-sm font-medium w-24">
                    Color:{" "}
                    <span className="font-semibold">
                      {selectedSwatch?.name}
                    </span>
                  </p>

                  {/* Swatches */}
                  <div className="flex gap-2">
                    {product.colorways.map((swatch) => {
                      const isActive = selectedColorName === swatch.name;
                      return (
                        <div
                          key={swatch.name}
                          className="relative flex-shrink-0 group"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedColorName(swatch.name);
                              setActiveImage(swatch.image || product.image);
                            }}
                            className={`w-7 h-7 border transition border-gray-300 hover:border-black ${
                              isActive ? "ring-1 ring-black" : ""
                            }`}
                            style={{
                              backgroundColor: swatch.color,
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {product.body && (
                <ul className="list-disc pl-5 pt-2 text-gray-700">
                  {product.body.map((item, index) => (
                    <li key={index} className="pb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Services */}
              <p className="pt-6 font-medium">Select a service:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center gap-4">
                <Button
                  onClick={() => openModal(clothingLineService20)}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  20 PCS Clothing Line Package
                </Button>
                <Button
                  onClick={() => openModal(noMinimumService)}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  No Minimum Order
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-6xl mx-auto pt-20 md:pt-0 pb-30 px-8">
          <h2 className="text-2xl font-medium text-gray-800 text-center">
            Featured Products
          </h2>
          {featured.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {featured.map((item) => (
                <button
                  key={slugify(item.title)}
                  onClick={() => handleProductClick(item)}
                  className="block p-4 text-center transition-transform duration-200 hover:scale-105"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full drop-shadow-[0px_25px_25px_rgba(0,0,0,0.5)] object-contain mb-4"
                  />
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No featured products available.
            </p>
          )}
        </section>
        <Footer />
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto"
          onClick={closeModal}
        >
          <div
            className="services_section bg-white shadow-xl p-6 w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 md:h-full drop-shadow-[0px_25px_25px_rgba(0,0,0,0.5)] object-contain mx-auto"
              />
              <div className="space-y-4 text-left px-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h1>
                <p className="text-gray-900 font-semibold">
                  {selectedService.description}
                </p>
                {selectedService.body && (
                  <ol className="list-decimal list-inside text-gray-700">
                    {selectedService.body.map((item, index) => (
                      <li key={index} className="pb-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Button
                onClick={handleGetQuote}
                className="bg-green-600 hover:bg-green-700"
              >
                Get a Quote
              </Button>
              <Button
                onClick={closeModal}
                className="bg-black hover:bg-gray-800"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
