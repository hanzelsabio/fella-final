import React from "react";

/**
 * Props:
 *  - colorways: array of color objects { name, color, image }
 *  - selectedColorName: string
 *  - onSelect: function(swatch) => void
 *  - showLabel: boolean (optional) - display current color name
 */
const ColorSwatches = ({
  colorways,
  selectedColorName,
  onSelect,
  showLabel = false,
}) => {
  const selectedSwatch = colorways.find((c) => c.name === selectedColorName);

  return (
    <div className="flex flex-wrap items-center gap-4">
      {showLabel && (
        <p className="text-sm font-medium w-24">
          Color: <span className="font-semibold">{selectedSwatch?.name}</span>
        </p>
      )}
      <div className="flex gap-2">
        {colorways.map((swatch) => {
          const isActive = selectedColorName === swatch.name;
          return (
            <button
              key={swatch.name}
              type="button"
              onClick={() => onSelect(swatch)}
              className={`w-7 h-7 border transition border-gray-300 hover:border-black ${
                isActive ? "ring-1 ring-black" : ""
              }`}
              style={{
                backgroundColor: swatch.color,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorSwatches;
