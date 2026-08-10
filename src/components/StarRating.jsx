import React from "react";

export default function StarRating({ rating = 0, reviewCount, size = "sm" }) {
  const rounded = Math.round(rating * 2) / 2;
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className={`flex items-center gap-1.5 ${textSize}`}>
      <div className="flex text-turmeric-600" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = n <= Math.floor(rounded);
          const half = !filled && n - 0.5 === rounded;
          return (
            <span key={n} className="relative inline-block leading-none">
              <span className="text-brass-100">★</span>
              {(filled || half) && (
                <span
                  className="absolute inset-0 overflow-hidden text-turmeric-600"
                  style={{ width: half ? "50%" : "100%" }}
                >
                  ★
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="font-semibold text-ink">{rating.toFixed(1)}</span>
      {reviewCount != null && (
        <span className="text-stone-500">({reviewCount})</span>
      )}
    </div>
  );
}
