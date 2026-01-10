import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Default selected color (black first, then first color)
  const defaultColor =
    product.colorways?.find((c) => c.name.toLowerCase() === "black") ||
    product.colorways?.[0] ||
    null;

  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [previewImage, setPreviewImage] = useState(
    defaultColor?.image || product.image
  );

  // Sync when product changes
  useEffect(() => {
    setSelectedColor(defaultColor);
    setPreviewImage(defaultColor?.image || product.image);
  }, [product, defaultColor]);

  const handleNavigate = () => {
    navigate(`/product/${product.slug}`, {
      state: {
        color: selectedColor,
        image: previewImage,
      },
    });
  };

  return (
    <div className="p-4 flex flex-col justify-between">
      {/* Image + Title */}
      <div onClick={handleNavigate} className="cursor-pointer">
        <img
          src={previewImage}
          alt={product.title}
          className="w-full h-full object-contain mb-4 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]
                     transition-all duration-500 ease-in-out transform hover:scale-105"
        />
        <h3 className="text-gray-800 font-medium text-center text-md mb-2 line-clamp-2">
          {product.title}
        </h3>
      </div>

      {/* Color Swatches */}
      {product.colorways?.length > 0 && (
        <div className="flex justify-center gap-2 mt-16">
          {product.colorways.map((swatch) => {
            const isActive = selectedColor?.name === swatch.name;

            return (
              <button
                key={swatch.name}
                type="button"
                onClick={() => {
                  setSelectedColor(swatch);
                  setPreviewImage(swatch.image || product.image);
                }}
                className={`w-5 h-5 border transition border-gray-300 hover:border-black ${
                  isActive ? "ring-1 ring-black" : ""
                }`}
                style={{ backgroundColor: swatch.color, cursor: "pointer" }}
                aria-label={swatch.name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
