import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-amber-600 font-semibold"
      : "text-stone-700 hover:text-amber-600 transition-colors";

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(120,53,15,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-lg font-semibold text-white shadow-lg shadow-amber-200">
            N
          </div>
          <div>
            <p className="text-lg font-serif font-bold text-stone-900">
              Nallachar
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
              Heritage Spices
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/our-pickles" className={navLinkStyle}>
            Our Pickles
          </NavLink>
          <NavLink to="/our-process" className={navLinkStyle}>
            Our Process
          </NavLink>
          <NavLink to="/our-story" className={navLinkStyle}>
            Our Story
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm transition hover:border-amber-300 hover:text-amber-700"
            onClick={closeMenu}
          >
            <span className="text-lg">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm transition hover:border-amber-300 hover:text-amber-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-amber-200/70 bg-white px-4 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <NavLink to="/" className={navLinkStyle} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/our-pickles"
              className={navLinkStyle}
              onClick={closeMenu}
            >
              Our Pickles
            </NavLink>
            <NavLink
              to="/our-process"
              className={navLinkStyle}
              onClick={closeMenu}
            >
              Our Process
            </NavLink>
            <NavLink
              to="/our-story"
              className={navLinkStyle}
              onClick={closeMenu}
            >
              Our Story
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle} onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
