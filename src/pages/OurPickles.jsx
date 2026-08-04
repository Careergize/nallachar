import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function OurPickles() {
  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center animate-[fadeIn_0.8s_ease-out]">
        <p className="text-amber-700 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
          Our Pickles
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">
          A curated collection of heritage flavors
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Each jar is crafted in small batches with traditional recipes and the
          finest spices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,53,15,0.14)]"
            style={{ animation: `fadeIn 0.7s ease-out ${index * 0.08}s both` }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover"
            />
            <div className="flex flex-grow flex-col justify-between p-6">
              <div>
                <h2 className="font-serif font-bold text-xl text-stone-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-stone-600 text-sm mb-4">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-amber-800">
                  ₹{product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block text-amber-700 font-semibold hover:text-amber-900"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
