"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Lock } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mb-8">
          <Lock size={32} className="text-brand-gold" />
        </div>
        <h1 className="font-serif text-4xl text-white mb-4">Order Confirmed</h1>
        <p className="text-brand-text-muted mb-8 max-w-md">
          Thank you for your purchase. Your Obsidian timepiece will be carefully prepared and shipped shortly.
        </p>
        <Link
          href="/shop"
          className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-colors"
        >
          Return to Collection
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl text-white mb-4">Your Cart is Empty</h1>
        <p className="text-brand-text-muted mb-8">
          You have no items in your checkout.
        </p>
        <Link
          href="/shop"
          className="bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Link
        href="/shop"
        className="inline-flex items-center text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors mb-8 md:mb-12"
      >
        <ChevronLeft size={16} className="mr-2" /> Back to Collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Checkout Form (Mock) */}
        <div className="w-full lg:w-3/5">
          <h1 className="font-serif text-3xl text-white mb-8">Checkout</h1>

          <form onSubmit={handleCheckout} className="space-y-10">
            {/* Contact */}
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-brand-gold uppercase mb-4 pb-2 border-b border-brand-gray">Contact Information</h2>
              <div className="space-y-4">
                <input required type="email" placeholder="Email Address" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-brand-gold uppercase mb-4 pb-2 border-b border-brand-gray">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <input required type="text" placeholder="Last Name" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <input required type="text" placeholder="Address" className="w-full md:col-span-2 bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <input required type="text" placeholder="City" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <input required type="text" placeholder="Postal Code" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <select required className="w-full md:col-span-2 bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="eu">European Union</option>
                </select>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-brand-gold uppercase mb-4 pb-2 border-b border-brand-gray flex items-center justify-between">
                <span>Payment</span>
                <Lock size={16} className="text-brand-text-muted" />
              </h2>
              <div className="space-y-4">
                <input required type="text" placeholder="Card Number" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="MM / YY" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  <input required type="text" placeholder="CVC" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <input required type="text" placeholder="Name on Card" className="w-full bg-brand-charcoal border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold uppercase tracking-widest py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : `Pay $${totalPrice().toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5">
          <div className="bg-brand-charcoal border border-brand-gray p-6 lg:p-8 sticky top-24">
            <h2 className="font-serif text-xl text-white mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-16 bg-brand-black flex-shrink-0 border border-brand-gray">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-gray-light text-white text-[0.6rem] flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-white">{item.name}</h3>
                    <p className="text-xs text-brand-text-muted mt-1">{item.style}</p>
                  </div>
                  <div className="text-sm text-white">
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-gray pt-6 space-y-4">
              <div className="flex justify-between text-sm text-brand-text-muted">
                <span>Subtotal</span>
                <span>${totalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-brand-text-muted">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between text-sm text-brand-text-muted">
                <span>Taxes (Estimated)</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-brand-gray pt-4 flex justify-between items-end">
                <span className="text-base text-white uppercase tracking-wider">Total</span>
                <span className="font-serif text-2xl text-brand-gold">
                  ${totalPrice().toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
