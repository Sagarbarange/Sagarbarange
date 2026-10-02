"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { WATCH_DATA } from "@/lib/data";
import { useCartStore } from "@/store/useCartStore";
import { ChevronLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const watch = WATCH_DATA.find((w) => w.id === id);
  const { addItem } = useCartStore();
  const [activeImage, setActiveImage] = useState(0);

  if (!watch) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <Link
        href="/shop"
        className="inline-flex items-center text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors mb-8 md:mb-12"
      >
        <ChevronLeft size={16} className="mr-2" /> Back to Collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-24 shrink-0">
            {watch.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 md:w-full aspect-square bg-brand-charcoal border transition-colors overflow-hidden ${
                  activeImage === idx ? 'border-brand-gold' : 'border-brand-gray hover:border-brand-gold/50'
                }`}
              >
                <Image src={img} alt={`${watch.name} view ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="relative w-full aspect-square bg-brand-charcoal border border-brand-gray overflow-hidden">
            <Image
              src={watch.images[activeImage]}
              alt={watch.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-gold">
            {watch.brand} | {watch.style}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">{watch.name}</h1>
          <p className="text-2xl font-light text-brand-text mb-8">${watch.price.toLocaleString()}</p>

          <p className="text-brand-text-muted leading-relaxed mb-10">
            {watch.description}
          </p>

          <button
            onClick={() => addItem(watch)}
            className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold uppercase tracking-widest py-4 mb-8 transition-colors"
          >
            Add to Cart
          </button>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 py-6 border-y border-brand-gray">
            <div className="flex items-center gap-3 text-brand-text-muted">
              <ShieldCheck size={20} className="text-brand-gold" />
              <span className="text-xs uppercase tracking-wider">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted">
              <Truck size={20} className="text-brand-gold" />
              <span className="text-xs uppercase tracking-wider">Free Global Shipping</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted">
              <RotateCcw size={20} className="text-brand-gold" />
              <span className="text-xs uppercase tracking-wider">30-Day Returns</span>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 gap-y-4">
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Movement</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.movement}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Crystal</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.crystal}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Water Resistance</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.waterResistance}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Case Size</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.caseSize}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Case Material</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.caseMaterial}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gray/50 pb-2">
                <span className="text-sm text-brand-text-muted uppercase tracking-wider">Strap</span>
                <span className="text-sm text-white text-right max-w-[60%]">{watch.specs.strapMaterial}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
