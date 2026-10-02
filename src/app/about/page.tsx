import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000&auto=format&fit=crop"
            alt="Watchmaker at work"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Heritage
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
            The Obsession with Time
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-8">
              &quot;We do not merely measure time; we sculpt it. Every Obsidian timepiece is a testament to the belief that true luxury lies in uncompromising craftsmanship.&quot;
            </p>
            <p className="text-brand-text-muted">
              Founded on the principles of precision and elegance, Obsidian Timepieces was born from a singular vision: to create watches that transcend mere utility. Our master horologists combine centuries-old Swiss techniques with modern, cutting-edge materials to forge instruments of exceptional durability and breathtaking beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-square w-full">
              <Image
                src="https://images.unsplash.com/photo-1590494490886-f04bf4f738ea?q=80&w=1000&auto=format&fit=crop"
                alt="Movement detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-brand-gold/30 m-6 pointer-events-none" />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-white mb-6">The Art of the Movement</h2>
              <p className="text-brand-text-muted mb-6 leading-relaxed">
                At the heart of every Obsidian watch beats a movement of unparalleled accuracy. We source only the finest components, assembling them with painstaking care. Our calibers are tested under the most rigorous conditions, ensuring that they perform flawlessly whether you are in the boardroom or diving in the abyss.
              </p>
              <p className="text-brand-text-muted leading-relaxed">
                The finish of our movements is just as important as their function. Perlage, Côtes de Genève, and hand-beveled edges are standard across our collections, a secret joy for the owner who appreciates the hidden artistry of mechanical watchmaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-charcoal border-t border-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl text-white">Concierge Service</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-white font-serif text-xl mb-4">Boutique & Headquarters</h3>
                <div className="flex items-start text-brand-text-muted gap-4">
                  <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                  <p>128 Rue du Rhône<br/>1204 Geneva<br/>Switzerland</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-serif text-xl mb-4">Direct Inquiry</h3>
                <div className="flex items-center text-brand-text-muted gap-4 mb-3">
                  <Mail size={20} className="text-brand-gold shrink-0" />
                  <p>concierge@obsidiantime.com</p>
                </div>
                <div className="flex items-center text-brand-text-muted gap-4">
                  <Phone size={20} className="text-brand-gold shrink-0" />
                  <p>+41 22 123 45 67</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-text-muted mb-2">First Name</label>
                    <input type="text" className="w-full bg-brand-black border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-text-muted mb-2">Last Name</label>
                    <input type="text" className="w-full bg-brand-black border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-text-muted mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-black border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-text-muted mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-brand-black border border-brand-gray px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold uppercase tracking-widest px-8 py-4 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
