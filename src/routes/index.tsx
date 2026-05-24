import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Shield, Sparkles, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/pristine/hero-lambo.jpg";
import interior from "@/assets/pristine/interior.png";
import exterior from "@/assets/pristine/exterior.jpg";
import ceramic from "@/assets/pristine/ceramic.jpg";
import quoteImg from "@/assets/pristine/quote.jpg";
import gallery1 from "@/assets/pristine/gallery1.jpg";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Auto Detailing Miami FL | Pristine Auto Detailing — We Do Any Car" },
      {
        name: "description",
        content:
          "Pristine Auto Detailing — Miami's #1 mobile auto detailing service. We come to you in Brickell, Miami Beach, Coral Gables, Doral & all of Miami-Dade. Interior, exterior, ceramic coating. Book online.",
      },
      { property: "og:title", content: "Mobile Auto Detailing Miami | Pristine Auto Detailing" },
      { property: "og:description", content: "Miami's premier mobile detailing service. We do any car — from daily drivers to exotics. Book online." },
      { property: "og:image", content: hero },
      { name: "keywords", content: "mobile auto detailing Miami, car detailing Miami Beach, mobile detailing Brickell, auto detailing Miami-Dade, ceramic coating Miami, car wash Miami" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pristine Auto Detailing",
          "description": "Professional mobile auto detailing serving all of Miami-Dade and Broward County. We do any car.",
          "url": "https://pristinedetailmiami.lovable.app",
          "telephone": "+17577841773",
          "priceRange": "$$",
          "image": "https://pristinedetailmiami.lovable.app/assets/hero-lambo-BgtLrEmz.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.7617,
            "longitude": -80.1918
          },
          "areaServed": [
            "Miami", "Brickell", "Miami Beach", "Coral Gables", "Hialeah",
            "Doral", "Kendall", "Fort Lauderdale", "Homestead", "Aventura"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "40",
            "bestRating": "5"
          },
          "openingHours": "Mo-Su 07:00-20:00",
          "sameAs": [
            "https://instagram.com/prisitinedetail757",
            "https://wa.me/17577841773"
          ]
        })
      }
    ]
  }),
  component: HomePage,
});

const SERVICE_AREAS = [
  "Brickell", "Coral Gables", "Miami Beach", "Hialeah",
  "Doral", "Kendall", "Fort Lauderdale", "Homestead",
];

const REVIEWS = [
  {
    name: "Brian O.",
    text: "Pristine did an amazing job detailing my truck! Now looks like it just left the showroom. Extremely hard working. Great value, highly recommended.",
  },
  {
    name: "Marisol G.",
    text: "Fast, professional, and they actually came to my apartment in Brickell. Car looks brand new. Will book again every month.",
  },
  {
    name: "Andre P.",
    text: "Did a ceramic coating on my G-Wagon. The gloss is unreal and water beads right off. These guys know what they're doing.",
  },
];

const FAQS = [
  {
    q: "How much does mobile detailing cost in Miami?",
    a: "Our prices start at $120 for an exterior detail, $150 for interior, and $250 for a full detail. Pricing varies by vehicle size — sedans, SUVs, and trucks are all priced differently. Use our instant quote calculator for an exact price in seconds.",
  },
  {
    q: "Do I need to be home when you detail my car?",
    a: "Nope! As long as we can access your vehicle and you leave us a key or access code, we can detail your car while you're at work, the gym, or anywhere. We'll text you when we start and when we're done.",
  },
  {
    q: "What areas in Miami do you service?",
    a: "We cover all of Miami-Dade and Broward County — including Brickell, Miami Beach, Coral Gables, Hialeah, Doral, Kendall, Fort Lauderdale, Homestead, Aventura, and everywhere in between.",
  },
  {
    q: "How long does a full detail take?",
    a: "A basic exterior wash takes 1–2 hours. A full interior + exterior detail typically takes 3–5 hours depending on vehicle size and condition. Paint correction and ceramic coating jobs can take a full day.",
  },
  {
    q: "Do you bring your own water and supplies?",
    a: "Yes — we are 100% self-sufficient. We bring our own water tank, generator, pressure washer, and all professional-grade eco-friendly products. You don't need to provide anything.",
  },
  {
    q: "What's the difference between a detail and a regular car wash?",
    a: "A regular car wash is a quick surface clean. A professional detail is a deep, thorough restoration — we clean, decontaminate, polish, and protect every surface inside and out. The results last weeks, not days.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-sm md:text-base">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-electric shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-5 leading-relaxed max-w-3xl">{a}</p>
      )}
    </div>
  );
}

function HomePage() {
  const featured = SERVICES.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Lamborghini wheel close-up"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_0%,rgba(0,0,0,0.5)_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 grain opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full float-in">
          <div className="font-mono text-electric text-[11px] sm:text-xs mb-5 tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="h-px w-8 bg-electric" />
            Mobile Detailing · Miami, FL — We Do Any Car
          </div>
          <h1 className="font-display text-[2.8rem] sm:text-6xl md:text-[8rem] leading-[0.85] uppercase tracking-tight mb-8 text-balance">
            Not just clean.<br />
            <span className="inline-block border-y border-electric/40 px-2 -ml-2 text-electric">
              It's Pristine.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Professional mobile detailing that comes to your home, office, or
              high-rise. From daily drivers to exotics — we treat every car like
              it's our own.
            </p>
            <div className="flex gap-3">
              <Link
                to="/book"
                className="group relative overflow-hidden bg-electric text-ink px-7 py-4 font-bold uppercase text-xs tracking-tight inline-flex items-center gap-2"
              >
                Book Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/quote"
                className="border border-border px-7 py-4 font-bold uppercase text-xs tracking-tight hover:bg-secondary transition-colors inline-flex items-center"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {[
            { icon: Star, label: "5.0 Google Rating", sub: "40+ reviews" },
            { icon: MapPin, label: "We Come To You", sub: "Miami-Dade & Broward" },
            { icon: Shield, label: "Fully Insured", sub: "Eco-friendly products" },
            { icon: Sparkles, label: "Any Vehicle", sub: "Civic to Rolls Royce" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center md:justify-start">
              <item.icon className="h-5 w-5 text-electric shrink-0" />
              <div>
                <div className="text-sm font-semibold">{item.label}</div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
            <div>
              <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
                01 / Packages
              </div>
              <h2 className="font-display text-5xl md:text-6xl uppercase max-w-xl">
                Every Detail. Every Car.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-electric inline-flex items-center gap-2 self-start md:self-end"
            >
              View all services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((s, i) => (
              <Link
                key={s.id}
                to="/services"
                className="group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-card"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em]">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">
                      {s.tagline} · From ${s.sedanPrice}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl uppercase">
                      {s.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY BAND */}
      <section className="relative">
        <div className="grid grid-cols-3 gap-px bg-border">
          {[interior, gallery1, exterior, ceramic, gallery1, interior].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-card">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3 opacity-60">
              02 / Instant Quote
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-6">
              Know your price<br />in 10 seconds.
            </h2>
            <p className="text-lg opacity-70 max-w-md mb-8 leading-relaxed">
              No phone tag. No hidden fees. Pick your vehicle and package, get
              transparent pricing instantly.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-electric text-ink px-7 py-4 font-bold uppercase text-xs tracking-tight"
            >
              Calculate My Price <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={quoteImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
                03 / Reviews
              </div>
              <h2 className="font-display text-5xl md:text-6xl uppercase">
                Five stars. Forty+ times.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="border border-border p-8 bg-card/50">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric text-electric" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6">{r.text}</p>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  — {r.name} · Google
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
            05 / FAQ
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-12">
            Got questions?
          </h2>
          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
                06 / Instagram
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase">
                Follow the shine.
              </h2>
            </div>
            <a
              href="https://instagram.com/prisitinedetail757"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-electric inline-flex items-center gap-2 self-start md:self-end"
            >
              @prisitinedetail757 <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          {/* Behold.so embed — replace YOUR_FEED_ID after setting up at behold.so */}
          <div
            id="behold-widget"
            className="w-full min-h-[300px] bg-card/40 border border-border flex items-center justify-center"
          >
            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-3">
                Instagram Feed
              </p>
              <a
                href="https://instagram.com/prisitinedetail757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-electric text-ink px-5 py-3 text-xs font-bold uppercase tracking-tight"
              >
                View on Instagram <ArrowRight className="h-3.5 w-3.5" />
              </a>
              {/* 
                TO ENABLE INSTAGRAM FEED:
                1. Go to behold.so and create a free account
                2. Connect your Instagram @prisitinedetail757
                3. Get your embed code and replace this div with it
              */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
            07 / Coverage
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-12">
            Anywhere in Miami.
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="border border-border px-5 py-2.5 text-sm font-mono uppercase tracking-wider hover:border-electric hover:text-electric transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden border-t border-border">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-6">
            Ready for that<br />
            <span className="text-electric">showroom shine?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Book in 60 seconds. We'll come to you anywhere from Brickell to Fort Lauderdale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="bg-electric text-ink px-8 py-4 font-bold uppercase text-xs tracking-tight"
            >
              Book Now
            </Link>
            <a
              href="tel:+17577841773"
              className="border border-border px-8 py-4 font-bold uppercase text-xs tracking-tight hover:bg-secondary"
            >
              (757) 784-1773
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/17577841773?text=Hi%20Pristine!%20I%27d%20like%20to%20book%20a%20detail."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1ebe5d] transition-colors"
        style={{ borderRadius: "2px" }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}
