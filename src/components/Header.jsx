import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { categories } from "../data/categories";

export default function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [query, setQuery] = useState("");

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      query.trim()
        ? `/our-pickles?q=${encodeURIComponent(query)}`
        : "/our-pickles",
    );
    closeMenu();
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-turmeric-700 font-semibold"
      : "text-ink hover:text-turmeric-700 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-ivory-50">
      {/* Promo bar */}
      <div className="bg-maroon-900 px-4 py-2 text-center text-[12px] font-medium tracking-wide text-turmeric-100 sm:px-6 lg:px-8">
        Free shipping across Kerala on orders above ₹999 · Cash on delivery
        available
      </div>
      <div className="kasavu-strip" />

      {/* Main row: logo, search, account/cart */}
      <div className="border-b border-brass-100 bg-ivory-50/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(62,21,12,0.06)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            onClick={closeMenu}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full medallion text-lg font-semibold text-maroon-950 shadow-lg">
              N
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none text-maroon-900">
                Nallachar
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brass-600">
                Heritage Spices
              </p>
            </div>
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden flex-1 items-center overflow-hidden rounded-full border border-brass-300 bg-white shadow-sm focus-within:border-turmeric-500 md:flex"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for mango pickle, gift boxes, prawn achar..."
              className="w-full bg-transparent px-5 py-2.5 text-sm text-ink outline-none placeholder:text-stone-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-full items-center bg-turmeric-600 px-5 py-2.5 text-maroon-950 transition hover:bg-turmeric-500"
            >
              ⌕
            </button>
          </form>

          <div className="ml-auto flex items-center gap-2 sm:ml-0">
            <Link
              to="/cart"
              className="relative inline-flex items-center justify-center rounded-full border border-brass-200 bg-white p-2.5 text-ink shadow-sm transition hover:border-turmeric-400 hover:text-turmeric-700"
              onClick={closeMenu}
            >
              <span className="text-lg">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-chilli-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="inline-flex items-center justify-center rounded-full border border-brass-200 bg-white p-2.5 text-ink shadow-sm transition hover:border-turmeric-400 hover:text-turmeric-700 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mega menu row (desktop) */}
        <nav className="mx-auto hidden max-w-7xl items-center gap-1 px-4 pb-3 text-sm font-medium sm:px-6 md:flex lg:px-8">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("shop")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1.5 rounded-full bg-maroon-800 px-4 py-2 font-semibold text-ivory-100 transition hover:bg-maroon-700">
              <span>☰</span> Shop by Category
            </button>
            {openMenu === "shop" && (
              <div className="absolute left-0 top-full z-40 mt-1 w-[560px] rounded-2xl border border-brass-100 bg-white p-4 shadow-lift">
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/our-pickles?cat=${cat.id}`}
                      onClick={closeMenu}
                      className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-ivory-100"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span>
                        <span className="block font-semibold text-maroon-900">
                          {cat.label}
                        </span>
                        <span className="block text-xs text-stone-500">
                          {cat.blurb}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/our-pickles" className={navLinkStyle + " px-3 py-2"}>
            All Pickles
          </NavLink>
          <NavLink to="/our-process" className={navLinkStyle + " px-3 py-2"}>
            Our Process
          </NavLink>
          <NavLink to="/our-story" className={navLinkStyle + " px-3 py-2"}>
            Our Story
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle + " px-3 py-2"}>
            Contact
          </NavLink>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-brass-100 bg-white px-4 py-4 shadow-lg md:hidden">
          <form
            onSubmit={handleSearch}
            className="mb-4 flex overflow-hidden rounded-full border border-brass-300"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pickles..."
              className="w-full px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-turmeric-600 px-4 text-maroon-950"
            >
              ⌕
            </button>
          </form>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-600">
            Shop by Category
          </p>
          <nav className="mb-4 grid grid-cols-2 gap-2 text-sm">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/our-pickles?cat=${cat.id}`}
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-lg bg-ivory-100 px-3 py-2"
              >
                <span>{cat.icon}</span>
                <span className="text-ink">{cat.label}</span>
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm font-medium">
            <NavLink to="/" className={navLinkStyle} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/our-pickles"
              className={navLinkStyle}
              onClick={closeMenu}
            >
              All Pickles
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
