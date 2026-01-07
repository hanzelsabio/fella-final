import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Default selected color is black or first color
  const defaultColor =
    product.colorways?.find((c) => c.name.toLowerCase() === "black") ||
    product.colorways?.[0] ||
    null;

  const [previewImage, setPreviewImage] = useState(
    defaultColor?.image || product.image
  );
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const handleNavigate = () => {
    navigate(`/product/${product.slug}`, {
      state: {
        image: previewImage,
        color: selectedColor,
      },
    });
  };

  return (
    <div
      onClick={handleNavigate}
      className="p-4 flex flex-col justify-between transition-shadow cursor-pointer"
    >
      {/* Preview Image */}
      <img
        src={previewImage}
        alt={product.title}
        className="w-full h-full drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)] object-contain mb-4 transition-all duration-300"
      />

      {/* Product Title */}
      <h3 className="text-gray-800 font-medium text-center text-md mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Colorway Swatches */}
      {product.colorways?.length > 0 && (
        <div
          className="flex justify-center gap-2 mt-2"
          onClick={(e) => e.stopPropagation()}
        >
          {product.colorways.map((swatch) => {
            const isActive = selectedColor?.name === swatch.name;

            return (
              <div key={swatch.name} className="relative flex-shrink-0 group">
                <button
                  type="button"
                  onClick={() => setSelectedColor(swatch)}
                  onMouseEnter={() =>
                    setPreviewImage(swatch.image || product.image)
                  }
                  onMouseLeave={() =>
                    setPreviewImage(selectedColor?.image || product.image)
                  }
                  className={`w-5 h-5 border transition border-gray-300 hover:border-black ${
                    isActive ? "ring-1 ring-black" : ""
                  }`}
                  style={{ backgroundColor: swatch.color, cursor: "pointer" }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
