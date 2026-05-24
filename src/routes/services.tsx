import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Mobile detailing packages: interior, exterior, full detail, paint correction, ceramic coating. Transparent pricing for sedans, SUVs & trucks.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Packages & Pricing
          </div>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] max-w-4xl mb-6">
            Pick your package.<br />We do the work.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Transparent, competitive pricing for every vehicle size. All
            packages are mobile — we bring everything to your driveway, office,
            or apartment complex.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-px bg-border">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="grid md:grid-cols-12 gap-0 bg-background"
            >
              <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover" />
                {s.featured && (
                  <div className="absolute top-4 left-4 bg-electric text-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-2">
                      0{i + 1} / {s.tagline}
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl uppercase">
                      {s.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono shrink-0 ml-4">
                    <Clock className="h-3.5 w-3.5" />
                    {s.duration}
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 max-w-xl">{s.description}</p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-electric mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-border flex flex-wrap items-end justify-between gap-4">
                  <div className="flex gap-8">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Sedan / Coupe
                      </div>
                      <div className="font-display text-3xl">${s.sedanPrice}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        SUV / Truck / Van
                      </div>
                      <div className="font-display text-3xl text-electric">${s.suvPrice}</div>
                    </div>
                  </div>
                  <Link
                    to="/book"
                    search={{ service: s.id }}
                    className="bg-electric text-ink px-6 py-3 text-xs font-bold uppercase tracking-tight inline-flex items-center gap-2 hover:bg-foreground transition-colors"
                  >
                    Book This <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
            Not sure which to pick?
          </h2>
          <p className="text-muted-foreground mb-8">
            Use our instant quote tool — answer two questions, see your price.
          </p>
          <Link
            to="/quote"
            className="bg-electric text-ink px-8 py-4 font-bold uppercase text-xs tracking-tight inline-flex items-center gap-2"
          >
            Get Instant Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
