import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
          We’d love to hear from you
        </span>
        <h1 className="mb-3 font-serif text-4xl font-bold text-amber-950 md:text-5xl">
          Get in Touch with Us
        </h1>
        <p className="text-base leading-relaxed text-stone-600">
          Have questions about bulk orders, wholesale inquiries, or custom spice
          blends? We’d love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="contact-card flex flex-col justify-between space-y-6 rounded-[28px] bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 p-8 text-amber-50 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.35)]">
          <div>
            <h2 className="mb-6 font-serif text-2xl font-bold text-amber-300">
              Nallachar Heritage Spices
            </h2>
            <div className="space-y-4 text-sm text-amber-100/90">
              <div className="flex items-start gap-3">
                <span className="text-lg text-amber-400">📍</span>
                <div>
                  <strong className="mb-1 block text-white">Location:</strong>
                  Kollam & Thiruvananthapuram, Kerala, India
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg text-amber-400">📧</span>
                <div>
                  <strong className="mb-1 block text-white">Email:</strong>
                  support@nallachar.com
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg text-amber-400">📞</span>
                <div>
                  <strong className="mb-1 block text-white">
                    Phone / WhatsApp:
                  </strong>
                  +91 98765 43210
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Operating Hours
            </h3>
            <p className="text-sm text-amber-100/80">
              Monday - Saturday: 9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.3)]">
          {submitted ? (
            <div className="space-y-4 py-10 text-center">
              <div className="text-5xl">✅</div>
              <h2 className="font-serif text-2xl font-bold text-amber-950">
                Thank You!
              </h2>
              <p className="text-sm leading-relaxed text-stone-600">
                Your message has been received. Our team will get back to you
                within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", message: "" });
                }}
                className="pt-2 text-sm font-semibold text-amber-800 transition hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g. Geethu Krishna"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="geethu@example.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="+91 9225000000"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Message *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-800 py-3 font-bold text-white shadow transition-all duration-300 hover:-translate-y-1 hover:bg-amber-900"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
