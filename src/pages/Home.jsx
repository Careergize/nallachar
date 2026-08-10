import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products, shelves } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const slides = [
  {
    eyebrow: "Authentic Kerala Flavour",
    title: "Bold, sun-kissed pickles rooted in family traditions.",
    text: "Handcrafted mango, lemon, garlic and spice-rich pickles made with cold-pressed sesame oil and slow-cured care.",
    cta: { to: "/our-pickles", label: "Explore Our Pickles" },
    image:
      "https://i.pinimg.com/736x/3a/dc/14/3adc14b2575783d354e7ce6bca5612a3.jpg",
  },
  {
    eyebrow: "Festive Gifting",
    title: "Heritage jars, dressed for the season of giving.",
    text: "Curated gift boxes pairing our bestselling pickles in hand-finished packaging — ready for Onam, Vishu and beyond.",
    cta: { to: "/our-pickles?cat=gifts", label: "Shop Gift Packs" },
    image:
      "https://i.pinimg.com/1200x/38/ef/6a/38ef6ae50536b499372e892ab9d2c604.jpg",
  },
  {
    eyebrow: "Coastal Kerala, Bottled",
    title: "Signature prawn & fish achar, made the old way.",
    text: "Fresh local catch, dark-roasted curry leaf and a slow simmer — our non-veg range for those who grew up on this taste.",
    cta: { to: "/our-pickles?cat=nonveg", label: "Shop Non-Veg Pickles" },
    image:
      "https://i.pinimg.com/1200x/11/af/f6/11aff6ab1c4c2a0c9c7ad8956ce513da.jpg",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((n) => (n + 1) % slides.length),
      5500,
    );
    return () => clearInterval(id);
  }, []);

  const shelfProducts = (id) => products.filter((p) => p.shelf?.includes(id));

  return (
    <div>
      {/* Hero banner carousel */}
      <section className="relative overflow-hidden bg-maroon-950 text-ivory-100">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${i === active ? "grid" : "hidden"} grid-cols-1 items-center gap-10 lg:grid-cols-2`}
            >
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-turmeric-400">
                  {slide.eyebrow}
                </p>
                <h1 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-8 max-w-xl text-lg text-ivory-200/90">
                  {slide.text}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.cta.to}
                    className="rounded-full bg-turmeric-500 px-7 py-3 font-semibold text-maroon-950 transition hover:bg-turmeric-400"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    to="/our-story"
                    className="rounded-full border border-ivory-100/30 px-7 py-3 font-semibold text-ivory-100 transition hover:bg-white/10"
                  >
                    Our Heritage
                  </Link>
                </div>
              </div>
              <div className="kasavu-frame overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
            </div>
          ))}

          <div className="mt-10 flex justify-center gap-2 lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-turmeric-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="kasavu-strip" />

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brass-600">
              Browse
            </p>
            <h2 className="font-display text-3xl font-bold text-maroon-900">
              Shop by Category
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/our-pickles?cat=${cat.id}`}
              className="kasavu-frame flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-maroon-900">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Product shelves */}
      {shelves.map((shelf) => {
        const items = shelfProducts(shelf.id);
        if (!items.length) return null;
        return (
          <section
            key={shelf.id}
            className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
          >
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brass-600">
                  {shelf.subtitle}
                </p>
                <h2 className="font-display text-2xl font-bold text-maroon-900 sm:text-3xl">
                  {shelf.title}
                </h2>
              </div>
              <Link
                to="/our-pickles"
                className="text-sm font-semibold text-maroon-800 transition hover:text-turmeric-600"
              >
                View all pickles →
              </Link>
            </div>

            <div className="shelf-scroll">
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="shelf-card w-[260px] sm:w-[280px]"
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Trust badges */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-brass-100 bg-white p-6 shadow-card sm:grid-cols-4">
          {[
            ["🚚", "Free Delivery", "On orders above ₹999"],
            ["💵", "Cash on Delivery", "Available across Kerala"],
            ["🌿", "No Preservatives", "Traditional curing only"],
            ["🏺", "Small-Batch", "Made fresh, weekly"],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-semibold text-maroon-900">
                {title}
              </span>
              <span className="text-xs text-stone-500">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why families love us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="kasavu-frame rounded-[2rem] bg-white p-8 shadow-card lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brass-600">
                Why families love us
              </p>
              <h3 className="mb-4 font-display text-3xl font-bold text-maroon-900">
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
                  className="rounded-2xl border border-brass-100 bg-ivory-100/70 p-4"
                >
                  <h4 className="mb-2 font-semibold text-maroon-900">
                    {title}
                  </h4>
                  <p className="text-sm text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-maroon-950 py-16 text-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-turmeric-400">
            From our customers
          </p>
          <h2 className="mb-8 font-display text-3xl font-bold">
            Trusted by pickle lovers across India
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Anjali, Kochi",
                text: "Tastes exactly like my grandmother's mango pickle. The oil and spice balance is spot on.",
              },
              {
                name: "Rahul, Bangalore",
                text: "Ordered the gift box for Onam — packaging was beautiful and the prawn pickle disappeared in two days.",
              },
              {
                name: "Meera, Chennai",
                text: "Finally a pickle brand that doesn't over-oil the jar. Fresh, spicy, and delivered quickly.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-brass-700/40 bg-maroon-900/60 p-6"
              >
                <div className="mb-3 text-turmeric-400">★★★★★</div>
                <p className="mb-4 text-sm leading-relaxed text-ivory-200/90">
                  "{r.text}"
                </p>
                <p className="text-sm font-semibold text-turmeric-300">
                  {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-turmeric-100 p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold text-maroon-900">
              Get 10% off your first order
            </h3>
            <p className="text-sm text-stone-600">
              Join our list for early access to seasonal batches and festive
              offers.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm overflow-hidden rounded-full border border-brass-300 bg-white shadow-sm sm:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-maroon-800 px-5 py-2.5 text-sm font-semibold text-ivory-100 transition hover:bg-maroon-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
