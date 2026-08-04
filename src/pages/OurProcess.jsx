import React from "react";
import { Link } from "react-router-dom";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Ethical Local Sourcing",
      desc: "We source raw, farm-fresh cut mangoes, gooseberries, and wild spices directly from certified organic smallholder farms in Kollam and Wayanad.",
      icon: "🌿",
      note: "Sourced with care",
    },
    {
      num: "02",
      title: "Traditional Sun-Curing (Veyilil Vechathu)",
      desc: "Instead of chemical preservatives, our freshly sliced fruits and spices are cured naturally under open sunlight in large ceramic Bharanis.",
      icon: "☀️",
      note: "Sunlit and slow",
    },
    {
      num: "03",
      title: "Cold-Pressed Sesame Oil Blend",
      desc: "Slow-heated cold-pressed Gingelly (Sesame) oil infused with roasted Asafoetida (Kayam) and crushed bird’s eye chili seals in rich flavor.",
      icon: "🫗",
      note: "Layered with spice",
    },
    {
      num: "04",
      title: "Hand-Batched Aging & Packaging",
      desc: "Every jar is hand-poured in small batches, rested for 14 days, and sealed airtight in eco-friendly glass containers.",
      icon: "🫙",
      note: "Packed to preserve",
    },
  ];

  return (
    <div>
      <section className="process-hero bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 px-4 py-20 text-amber-50 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Time-Honored Craftsmanship
            </span>
            <h1 className="mb-5 font-serif text-4xl font-bold md:text-5xl">
              Our Traditional Preparation Process
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-amber-100/90 md:text-lg">
              Zero artificial preservatives, zero synthetic colors. Just
              grandmother’s ancient Kerala recipes, pure sunlight, and
              cold-pressed Gingelly oil.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-amber-100/90">
            {[
              "Slow-cured naturally",
              "Small-batch craftsmanship",
              "No preservatives",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-amber-300/30 bg-white/10 px-4 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            From farm to jar
          </p>
          <h2 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">
            Every step carries the soul of Kerala
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="process-card relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-amber-200/70 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.35)]"
              style={{ animationDelay: `${idx * 140}ms` }}
            >
              <div className="process-glow absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-amber-200/60 via-transparent to-amber-100/70" />
              <div className="absolute right-5 top-4 text-5xl font-serif font-bold text-amber-100 select-none">
                {step.num}
              </div>

              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-amber-950">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 md:text-base">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-amber-200 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  {step.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-100/60 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-amber-950">
            Taste the Heritage Difference
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-stone-700">
            Experience how slow curing and authentic Kerala spices elevate
            everyday meals.
          </p>
          <Link
            to="/our-pickles"
            className="inline-block rounded-xl bg-amber-800 px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-amber-900"
          >
            Shop Sun-Cured Pickles
          </Link>
        </div>
      </section>
    </div>
  );
}
