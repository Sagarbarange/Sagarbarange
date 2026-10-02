"use client";

import Image from "next/image";
import Link from "next/link";
import { Watch } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";

export function ProductCard({ watch }: { watch: Watch }) {
  const { addItem } = useCartStore();

  return (
    <div className="group flex flex-col h-full bg-brand-charcoal border border-brand-gray overflow-hidden transition-all duration-300 hover:border-brand-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      <Link href={`/shop/${watch.id}`} className="relative aspect-[4/5] overflow-hidden bg-brand-black block">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-brand-gold">
          {watch.style}
        </div>
        <Link href={`/shop/${watch.id}`}>
          <h3 className="font-serif text-xl text-white mb-1 group-hover:text-brand-gold transition-colors">
            {watch.name}
          </h3>
        </Link>
        <p className="text-brand-text-muted text-sm mb-6 flex-1">
          {watch.specs.movement}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-white font-medium">
            ${watch.price.toLocaleString()}
          </span>
          <button
            onClick={() => addItem(watch)}
            className="text-xs uppercase tracking-widest border-b border-brand-gold text-brand-gold pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
