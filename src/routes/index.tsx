import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Shield, Sparkles, Star } from "lucide-react";
import hero from "@/assets/pristine/hero-lambo.jpg";
import interior from "@/assets/pristine/interior.png";
import exterior from "@/assets/pristine/exterior.jpg";
import ceramic from "@/assets/pristine/ceramic.jpg";
import gallery1 from "@/assets/pristine/gallery1.jpg";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pristine Auto Detailing — Mobile Detailing in Miami, FL" },
      {
        name: "description",
        content:
          "We come to you. Premium mobile auto detailing across Miami-Dade & Broward. Interior, exterior, ceramic coating. Book online.",
      },
      { property: "og:image", content: hero },
    ],
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

function HomePage() {
  const featured = SERVICES.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-人">
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
            Mobile Detailing · Miami, FL
          </div>
          <h1 className="font-display text-[3.5rem] sm:text-7xl md:text-[9rem] leading-[0.85] uppercase tracking-tight mb-8 text-balance">
            We Do<br />
            <span className="inline-block border-y border-electric/40 px-2 -ml-2 text-electric">
              Any Car.
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
            <img src={ceramic} alt="" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* SERVICE AREA */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
            04 / Coverage
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
              href="tel:+17577625110"
              className="border border-border px-8 py-4 font-bold uppercase text-xs tracking-tight hover:bg-secondary"
            >
              (757) 762-5110
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
