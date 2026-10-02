"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, totalPrice } = useCartStore();

  // Create a hydration-safe render
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // We defer to avoid hydration mismatch
    const timeout = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={isClient ? "block" : "hidden"}>
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-charcoal z-50 transform transition-transform duration-300 ease-in-out border-l border-brand-gray flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-gray">
          <h2 className="font-serif text-xl text-brand-gold uppercase tracking-wider">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-text-muted hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag size={48} className="text-brand-gray-light" />
              <p className="text-brand-text-muted">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="mt-4 px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-24 h-24 bg-brand-black rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                      <p className="text-xs text-brand-text-muted mt-1">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-gray bg-brand-black rounded-sm">
                        <button
                          className="px-2 py-1 text-brand-text-muted hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 text-sm text-white w-8 text-center">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-brand-text-muted hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-brand-text-muted hover:text-red-400 underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-brand-gray bg-brand-charcoal mt-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-brand-text-muted uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-xl font-serif text-brand-gold">${totalPrice().toLocaleString()}</span>
            </div>
            <p className="text-xs text-brand-text-muted mb-4 text-center">Shipping and taxes calculated at checkout.</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full block text-center bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-semibold uppercase tracking-widest py-4 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
    </div>
  );
}
