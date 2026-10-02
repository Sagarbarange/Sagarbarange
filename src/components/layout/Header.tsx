"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export function Header() {
  const { openCart, totalItems } = useCartStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-gray/50 bg-brand-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-text hover:text-brand-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-1 md:flex-none text-center md:text-left">
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-brand-gold uppercase font-bold">
            Obsidian
          </h1>
          <p className="text-[0.6rem] tracking-[0.3em] text-brand-text-muted uppercase mt-0.5">Timepieces</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase">
            Home
          </Link>
          <Link href="/shop" className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase">
            Collections
          </Link>
          <Link href="/about" className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase">
            Heritage
          </Link>
        </nav>

        {/* Cart Action */}
        <div className="flex items-center justify-end flex-1 md:flex-none">
          <button
            onClick={openCart}
            className="relative p-2 text-brand-text hover:text-brand-gold transition-colors flex items-center"
            aria-label="Open Cart"
          >
            <ShoppingBag size={24} />
            {totalItems() > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[0.65rem] font-bold text-brand-black bg-brand-gold rounded-full transform translate-x-1/4 -translate-y-1/4">
                {totalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-brand-gray/50 bg-brand-charcoal">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="/"
              className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-widest text-brand-text hover:text-brand-gold transition-colors uppercase block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Heritage
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
