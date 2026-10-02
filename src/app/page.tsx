import Image from "next/image";
import Link from "next/link";
import { WATCH_DATA } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredWatches = WATCH_DATA.filter((watch) => watch.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Watch Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            The Pinnacle of Horology
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-4xl">
            Masterpieces <br className="hidden md:block" />
            <span className="text-brand-text-muted">of Time</span>
          </h2>
          <p className="text-brand-text-muted text-lg max-w-xl mx-auto mb-10">
            Discover our exclusive collection of meticulously crafted timepieces, where unyielding precision meets unapologetic elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition-colors flex items-center justify-center gap-2"
            >
              Explore Collection
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="border border-brand-gray bg-brand-black/50 backdrop-blur-sm hover:border-brand-gold hover:text-brand-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all"
            >
              Our Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
                Curated Selection
              </span>
              <h2 className="font-serif text-4xl text-white">Featured Timepieces</h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors mt-6 md:mt-0"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="py-24 border-y border-brand-gray bg-brand-charcoal overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop"
                alt="Watchmaking craftsmanship"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-brand-gold/30 m-4 pointer-events-none" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
                The Obsidian Way
              </span>
              <h2 className="font-serif text-4xl text-white mb-6">Uncompromising Quality</h2>
              <p className="text-brand-text-muted mb-6 leading-relaxed">
                Every Obsidian timepiece is born from a relentless pursuit of perfection. Our master watchmakers blend traditional Swiss techniques with cutting-edge materials to forge instruments of exceptional durability and beauty.
              </p>
              <p className="text-brand-text-muted mb-10 leading-relaxed">
                From the drawing board to the final polish, we accept no compromises. A watch is not merely a tool to tell time; it is a statement of intent, a legacy to be passed down through generations.
              </p>
              <Link
                href="/about"
                className="border-b border-brand-gold text-brand-gold pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
