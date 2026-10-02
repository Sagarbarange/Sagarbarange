"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-gray mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="md:col-span-1">
            <h2 className="font-serif text-xl tracking-widest text-brand-gold uppercase font-bold mb-4">
              Obsidian
            </h2>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              Forging masterpieces of time. Precision, elegance, and unyielding quality for the modern connoisseur.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">Collections</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">All Timepieces</Link></li>
              <li><Link href="/shop?style=Dress" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Dress Watches</Link></li>
              <li><Link href="/shop?style=Diver" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Divers</Link></li>
              <li><Link href="/shop?style=Chronograph" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Chronographs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">Brand</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Our Heritage</Link></li>
              <li><Link href="/about#contact" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-brand-text-muted hover:text-brand-gold transition-colors text-sm">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">Newsletter</h3>
            <p className="text-brand-text-muted text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-brand-black border border-brand-gray px-4 py-2 text-sm text-brand-text w-full focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-black px-4 py-2 text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-brand-gray mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} Obsidian Timepieces. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
