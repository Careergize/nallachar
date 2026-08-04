import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponCouponApplied] = useState(false);
  const navigate = useNavigate();

  const shippingCost = subtotal > 0 ? (subtotal >= 999 ? 0 : 70) : 0;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "NADAN10") {
      const disc = Math.round(subtotal * 0.1);
      setDiscount(disc);
      setCouponCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try NADAN10 for 10% off!");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="mb-4 text-6xl">🛒</div>
        <h2 className="mb-2 font-serif text-3xl font-bold text-amber-950">
          Your Cart is Empty
        </h2>
        <p className="mb-8 text-stone-600">
          Looks like you haven’t added any authentic Kerala pickles yet.
        </p>
        <Link
          to="/our-pickles"
          className="inline-block rounded-lg bg-amber-800 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-amber-900"
        >
          Explore Pickle Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-amber-200 pb-4">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Your shopping jar
        </p>
        <h1 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">
          Your Shopping Jar
          <span className="ml-3 text-lg font-sans font-normal text-amber-700">
            ({cart.length} unique items)
          </span>
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item flex flex-col items-center justify-between gap-4 rounded-[24px] border border-stone-200 bg-white p-4 shadow-[0_16px_50px_-24px_rgba(120,53,15,0.3)] sm:flex-row sm:p-6"
            >
              <div className="flex w-full items-center space-x-4 sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 flex-shrink-0 rounded-lg border border-amber-100 object-cover"
                />
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="mt-1 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                    {item.tag || "Handcrafted"}
                  </span>
                  <div className="mt-1 font-medium text-amber-900">
                    ₹{item.price} each
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between space-x-6 sm:w-auto">
                <div className="flex items-center overflow-hidden rounded-lg border border-stone-300 bg-stone-50">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 text-stone-600 transition-colors hover:bg-amber-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-semibold text-stone-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 text-stone-600 transition-colors hover:bg-amber-100"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-amber-950">
                    ₹{item.price * item.quantity}
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-xl text-red-500 transition-colors hover:text-red-700"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-2">
            <Link
              to="/our-pickles"
              className="flex items-center gap-1 text-sm font-medium text-amber-800 transition hover:text-amber-950"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        <div className="h-fit rounded-[28px] border border-amber-200/80 bg-amber-50/70 p-6 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.35)]">
          <h2 className="mb-4 border-b border-amber-200 pb-2 font-serif text-xl font-bold text-amber-950">
            Order Summary
          </h2>

          <form onSubmit={handleApplyCoupon} className="mb-6 flex gap-2">
            <input
              type="text"
              placeholder="Promo Code (NADAN10)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-grow rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-stone-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-stone-900"
            >
              Apply
            </button>
          </form>

          {couponApplied && (
            <p className="mb-4 text-xs font-semibold text-emerald-700">
              ✓ Coupon NADAN10 applied (10% off)
            </p>
          )}

          <div className="mb-6 space-y-3 text-sm text-stone-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-stone-900">₹{subtotal}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>
                {shippingCost === 0 ? (
                  <strong className="text-emerald-700">FREE</strong>
                ) : (
                  `₹${shippingCost}`
                )}
              </span>
            </div>
            {shippingCost > 0 && (
              <p className="text-xs italic text-amber-800">
                Add ₹{999 - subtotal} more for Free Shipping!
              </p>
            )}

            <div className="flex justify-between border-t border-amber-200 pt-3 text-base font-bold text-amber-950">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="block w-full rounded-xl bg-amber-700 py-3.5 text-center font-bold text-white shadow transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
