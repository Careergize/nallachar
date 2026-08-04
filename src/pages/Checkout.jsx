import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
  });

  // Calculate totals
  const shippingCost = subtotal > 0 ? (subtotal >= 999 ? 0 : 70) : 0;
  const grandTotal = subtotal + shippingCost;

  // WhatsApp configuration (Replace with your actual business WhatsApp number)
  const WHATSAPP_NUMBER = "919876543210";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.address ||
      !formData.pincode
    ) {
      alert(
        "Please fill in all required delivery details before booking on WhatsApp.",
      );
      return;
    }

    // Build item breakdown text
    const itemLines = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* x ${item.quantity} = ₹${item.price * item.quantity}`,
      )
      .join("\n");

    // Construct the formatted WhatsApp message
    const message = `*New Order Request - NallaChar Heritage Spices*
----------------------------------------
*Customer Details:*
• *Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Address:* ${formData.address}, ${formData.city} - ${formData.pincode}
${formData.notes ? `• *Notes:* ${formData.notes}\n` : ""}
----------------------------------------
*Ordered Jars:*
${itemLines}

----------------------------------------
• *Subtotal:* ₹${subtotal}
• *Shipping:* ${shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
• *Total Payable:* *₹${grandTotal}*
----------------------------------------
Please confirm my order and share the UPI / Payment details!`;

    // Encode for URL and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Optionally clear cart and redirect
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="mb-4 text-6xl">📦</div>
        <h2 className="mb-2 font-serif text-3xl font-bold text-amber-950">
          No Items to Checkout
        </h2>
        <p className="mb-8 text-stone-600">
          Add pickles to your jar before proceeding to checkout.
        </p>
        <Link
          to="/our-pickles"
          className="inline-block rounded-lg bg-amber-800 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-amber-900"
        >
          View Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-amber-200 pb-4">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Fast, personal ordering
        </p>
        <h1 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">
          Checkout & WhatsApp Ordering
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.3)] sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-bold text-amber-950">
            <span>📍</span> Delivery Information
          </h2>

          <form onSubmit={handleWhatsAppBooking} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Geethu Krishna"
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                Street Address / House Name *
              </label>
              <textarea
                name="address"
                required
                rows="2"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="House name/no., Street, Area"
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  City / District *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Kollam / Trivandrum"
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="691001"
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                Special Delivery Notes (Optional)
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Less spicy preference, landmark, etc."
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
              >
                <span className="text-2xl">💬</span> Book Order Direct via
                WhatsApp
              </button>
              <p className="mt-2 text-center text-xs text-stone-500">
                Clicking will open WhatsApp with your item list and address
                pre-filled for instant confirmation.
              </p>
            </div>
          </form>
        </div>

        <div className="h-fit rounded-[28px] border border-amber-200/80 bg-amber-50/70 p-6 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.35)]">
          <h2 className="mb-4 border-b border-amber-200 pb-2 font-serif text-xl font-bold text-amber-950">
            Items in Order
          </h2>

          <div className="mb-6 max-h-80 space-y-3 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-amber-200/50 pb-2 text-sm"
              >
                <div>
                  <div className="font-bold text-stone-800">{item.name}</div>
                  <div className="text-xs text-stone-500">
                    Qty: {item.quantity} × ₹{item.price}
                  </div>
                </div>
                <div className="font-semibold text-amber-950">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-amber-200 pt-4 text-sm text-stone-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>
                {shippingCost === 0 ? (
                  <strong className="text-emerald-700">FREE</strong>
                ) : (
                  `₹${shippingCost}`
                )}
              </span>
            </div>

            <div className="flex justify-between border-t border-amber-300 pt-3 text-lg font-bold text-amber-950">
              <span>Total Amount</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
