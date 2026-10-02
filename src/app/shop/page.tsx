"use client";

import { useState, useMemo } from "react";
import { WATCH_DATA } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Filter, X } from "lucide-react";

const STYLES = ["All", "Dress", "Diver", "Chronograph", "Aviation", "Minimalist"];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

export default function ShopPage() {
  const [activeStyle, setActiveStyle] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredAndSortedWatches = useMemo(() => {
    let result = [...WATCH_DATA];

    // Filter by style
    if (activeStyle !== "All") {
      result = result.filter((watch) => watch.style === activeStyle);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return result;
  }, [activeStyle, sortBy]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">The Collection</h1>
        <p className="text-brand-text-muted max-w-2xl mx-auto">
          Explore our complete range of precision timepieces. Each watch is a testament to our commitment to horological excellence.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between border-y border-brand-gray py-4 mb-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center text-sm uppercase tracking-widest text-brand-text hover:text-brand-gold transition-colors"
          >
            <Filter size={16} className="mr-2" /> Filters
          </button>
          <span className="text-sm text-brand-text-muted">{filteredAndSortedWatches.length} Results</span>
        </div>

        {/* Sidebar Filters */}
        <aside className={`
          fixed inset-0 z-50 bg-brand-black p-6 transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:p-0 lg:w-64 lg:z-0 lg:bg-transparent lg:block
          ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex items-center justify-between lg:hidden mb-8">
            <h2 className="font-serif text-xl text-white">Filters</h2>
            <button onClick={() => setIsMobileFilterOpen(false)} className="text-brand-text-muted hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4 border-b border-brand-gray pb-2">
              Style
            </h3>
            <ul className="space-y-3">
              {STYLES.map((style) => (
                <li key={style}>
                  <button
                    onClick={() => {
                      setActiveStyle(style);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`text-sm tracking-wider uppercase transition-colors ${
                      activeStyle === style
                        ? "text-brand-gold font-semibold"
                        : "text-brand-text-muted hover:text-white"
                    }`}
                  >
                    {style}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4 border-b border-brand-gray pb-2">
              Sort By
            </h3>
            <ul className="space-y-3">
              {SORT_OPTIONS.map((option) => (
                <li key={option.value}>
                  <button
                    onClick={() => {
                      setSortBy(option.value);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`text-sm tracking-wider uppercase transition-colors text-left ${
                      sortBy === option.value
                        ? "text-brand-gold font-semibold"
                        : "text-brand-text-muted hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="hidden lg:flex justify-between items-center mb-6 text-sm text-brand-text-muted">
            <span>Showing {filteredAndSortedWatches.length} timepieces</span>
          </div>

          {filteredAndSortedWatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedWatches.map((watch) => (
                <ProductCard key={watch.id} watch={watch} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-brand-charcoal border border-brand-gray">
              <p className="text-brand-text-muted mb-4">No timepieces found matching your criteria.</p>
              <button
                onClick={() => { setActiveStyle("All"); setSortBy("featured"); }}
                className="text-brand-gold border-b border-brand-gold pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
