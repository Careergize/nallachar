import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <article
      className={`group rounded-[1.5rem] border border-brass-100 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-lift ${className}`.trim()}
    >
      <Link to={`/our-pickles?pid=${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full rounded-2xl object-cover"
        />
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="rounded-full bg-turmeric-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-turmeric-700">
              {product.tag}
            </span>
            <span className="text-xs font-semibold text-maroon-700">
              {product.category}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-maroon-900">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-stone-600">
            {product.description}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-stone-500">
              ({product.reviewCount})
            </span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-lg font-semibold text-maroon-900">
                ₹{product.price}
              </p>
              <p className="text-sm text-stone-400 line-through">
                ₹{product.mrp}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-4 w-full rounded-full bg-maroon-900 px-4 py-2.5 text-sm font-semibold text-ivory-100 transition hover:bg-maroon-800"
      >
        Add to cart
      </button>
    </article>
  );
}
