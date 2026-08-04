import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-amber-200/70 bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.28),_transparent_30%),linear-gradient(120deg,_rgba(120,53,15,0.95),_rgba(80,32,10,0.95))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28">
          <div className="max-w-2xl animate-[fadeIn_0.8s_ease-out]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Authentic Kerala Flavour
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bold, sun-kissed pickles rooted in family traditions.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-amber-50/90">
              Discover handcrafted mango, lemon, garlic, and spice-rich pickles
              made with cold-pressed sesame oil and slow-cured care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/our-pickles"
                className="rounded-full bg-amber-500 px-7 py-3 font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Explore Our Pickles
              </Link>
              <Link
                to="/our-story"
                className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Our Heritage
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-lg animate-[fadeIn_1s_ease-out]">
            <div className="rounded-[1.5rem] bg-white/90 p-6 text-stone-800">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Freshly Crafted
              </p>
              <p className="mb-4 font-serif text-2xl font-semibold text-stone-900">
                Small-batch recipes, slow-cured for depth and character.
              </p>
              <div className="grid gap-3 text-sm text-stone-600 sm:grid-cols-2">
                <div className="rounded-xl bg-amber-50 p-3">
                  Traditional spice blends
                </div>
                <div className="rounded-xl bg-amber-50 p-3">
                  No shortcuts, just patience
                </div>
                <div className="rounded-xl bg-amber-50 p-3">
                  Authentic Kerala taste
                </div>
                <div className="rounded-xl bg-amber-50 p-3">
                  Gift-worthy jars
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Bestsellers
            </p>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Loved for their rich spice and finish
            </h2>
          </div>
          <Link
            to="/our-pickles"
            className="text-sm font-semibold text-amber-700 transition hover:text-amber-800"
          >
            View all pickles →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,53,15,0.14)]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    {product.tag}
                  </span>
                  <span className="text-sm font-medium text-stone-500">
                    {product.category}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-stone-900">
                  {product.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-stone-600">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold text-amber-800">
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
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-amber-200/80 bg-white/80 p-8 shadow-[0_20px_50px_rgba(120,53,15,0.08)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Why families love us
              </p>
              <h3 className="mb-4 font-serif text-3xl font-bold text-stone-900">
                A premium taste of Kerala, delivered to your table
              </h3>
              <p className="max-w-xl text-lg text-stone-600">
                From festive feasts to everyday meals, our pickles bring warmth,
                spice, and nostalgia in every spoonful.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Handpicked ingredients",
                  "Fresh produce and aromatic spices from trusted sources.",
                ],
                [
                  "Traditional curing",
                  "Slow-aged for deeper flavor and lasting tang.",
                ],
                [
                  "Gift-ready jars",
                  "Beautiful packaging suitable for every celebration.",
                ],
                [
                  "Fast delivery",
                  "Freshly packed and shipped across Kerala and beyond.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-stone-200 bg-amber-50/70 p-4"
                >
                  <h4 className="mb-2 font-semibold text-stone-900">{title}</h4>
                  <p className="text-sm text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
