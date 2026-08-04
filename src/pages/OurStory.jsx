import React from "react";

export default function OurStory() {
  const pillars = [
    {
      icon: "🌱",
      title: "100% Organic & Local",
      text: "Sourced directly from local farmers in Kollam and Travancore, with care for soil, season, and craft.",
    },
    {
      icon: "🏺",
      title: "Authentic Bharani Curing",
      text: "Naturally cured under direct sunlight in traditional glazed jars that preserve flavor and character.",
    },
    {
      icon: "🚫",
      title: "Zero Chemical Preservatives",
      text: "Free from artificial food colors, synthetic acidity, or added MSG—just honest ingredients and time.",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 px-4 py-20 text-amber-50 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_35%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Rooted in Tradition
          </span>
          <h1 className="mb-5 font-serif text-4xl font-bold md:text-5xl">
            Preserving Kerala’s Culinary Soul
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-amber-100/90 md:text-lg">
            From our family’s kitchen in Kollam to spice lovers across India,
            every jar carries the warmth of a home-cooked memory.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[28px] border border-amber-200/70 bg-white p-2 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.35)]">
            <img
              src="https://i.pinimg.com/1200x/f2/2c/39/f22c394f7968d4c8c9544424c90b8908.jpg"
              alt="Traditional Kerala pickle preparation"
              className="h-[420px] w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="space-y-5 text-stone-700 leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">
              How Nallachar Began
            </span>
            <h2 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">
              A recipe carried by memory, not shortcuts
            </h2>
            <p>
              In every traditional Kerala household, pickle making was never a
              rushed chore—it was an annual ritual. Our grandmother gathered raw
              mangoes, tender gooseberries, and wild chilies every monsoon
              season.
            </p>
            <p>
              Nallachar was born out of a desire to protect these authentic
              recipes from being replaced by factory-produced, vinegar-loaded
              imitations. We continue to cure our pickles in ceramic{" "}
              <em>Bharanis</em> using cold-pressed gingelly oil and patient
              sunlight.
            </p>
            <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-sm text-amber-900">
              “Good food should taste like memory, not mass production.”
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-200 bg-amber-100/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Our promise
            </p>
            <h2 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">
              Three unshakable pillars behind every jar
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="story-card rounded-[24px] border border-amber-200/70 bg-white p-7 text-center shadow-[0_16px_50px_-24px_rgba(120,53,15,0.35)]"
                style={{ animationDelay: `${idx * 140}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-amber-900">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
