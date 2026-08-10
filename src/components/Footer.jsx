import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-brass-700/40 bg-maroon-950 pt-12 pb-8 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-3 font-display text-xl font-bold text-turmeric-400">
            Nallachar
          </h3>
          <p className="text-sm leading-relaxed text-stone-400">
            Small-batch Kerala pickles crafted with age-old recipes, sun-dried
            produce, and premium spices.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-stone-100">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/our-pickles"
                className="transition hover:text-turmeric-400"
              >
                All Pickles
              </Link>
            </li>
            <li>
              <Link
                to="/our-process"
                className="transition hover:text-turmeric-400"
              >
                Our Process
              </Link>
            </li>
            <li>
              <Link
                to="/our-story"
                className="transition hover:text-turmeric-400"
              >
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-stone-100">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/contact"
                className="transition hover:text-turmeric-400"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-turmeric-400">
                View Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-stone-100">Visit Us</h4>
          <p className="text-sm text-stone-400">
            Kollam & Thiruvananthapuram, Kerala
          </p>
          <p className="mt-1 text-sm text-stone-400">support@nallachar.com</p>
        </div>
      </div>
      <div className="mt-8 border-t border-maroon-800/60 pt-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Nallachar Heritage Spices. All rights
        reserved.
      </div>
    </footer>
  );
}
