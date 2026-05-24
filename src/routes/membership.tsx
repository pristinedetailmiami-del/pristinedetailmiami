import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Crown } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Monthly detailing memberships in Miami. Fresh Start, Pro Care, and Black Card plans — save up to 20% with priority service and member perks.",
      },
    ],
  }),
  component: MembershipPage,
});

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  badge?: string;
  highlight: string;
  perks: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "fresh",
    name: "Fresh Start",
    tagline: "Keep your ride looking sharp year-round",
    price: 79,
    highlight: "Save 10% on all services",
    perks: [
      "1 exterior & interior detail monthly",
      "10% off add-on treatments",
      "Flexible online scheduling",
      "Complimentary air freshener",
    ],
  },
  {
    id: "pro",
    name: "Pro Care",
    tagline: "For drivers who demand showroom quality",
    price: 149,
    badge: "Most Popular",
    featured: true,
    highlight: "Save 15% on all services",
    perks: [
      "2 full details per month",
      "15% off all additional services",
      "Priority same-day appointments",
      "Free tire shine & trim dressing",
      "Exclusive member rewards",
    ],
  },
  {
    id: "black",
    name: "Black Card",
    tagline: "White-glove service for discerning owners",
    price: 299,
    highlight: "Save 20% on all services",
    perks: [
      "4 premium details per month",
      "20% off every service",
      "Personal detailing specialist",
      "Free pickup & delivery",
      "Yearly paint enhancement included",
    ],
  },
];

function MembershipPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Membership
          </div>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] max-w-4xl mb-6">
            Detail every month.<br />Pay less every time.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Three monthly plans built for Miami drivers. Cancel anytime. All
            memberships include our scratch-free wash, eco-safe products, and
            mobile service to your home or office.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 md:gap-px bg-border">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative bg-background p-8 md:p-10 flex flex-col ${
                p.featured ? "md:scale-[1.02] md:shadow-[0_0_40px_rgba(56,189,248,0.08)]" : ""
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-8 bg-electric text-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Crown className="h-3 w-3" />
                  {p.badge}
                </div>
              )}

              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-3">
                {p.id === "black" ? "Tier 03" : p.id === "pro" ? "Tier 02" : "Tier 01"}
              </div>
              <h2 className="font-display text-4xl uppercase mb-2">{p.name}</h2>
              <p className="text-sm text-muted-foreground mb-8 min-h-[3rem]">
                {p.tagline}
              </p>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="font-display text-6xl">${p.price}</span>
                <span className="text-sm text-muted-foreground font-mono">/mo</span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-electric mb-8 pb-8 border-b border-border">
                {p.highlight}
              </div>

              <ul className="space-y-3 mb-10">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-electric mt-0.5 shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-tight transition-colors ${
                  p.featured
                    ? "bg-electric text-ink hover:bg-foreground"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Get Started <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">
          No contracts · Cancel anytime · Miami-Dade & Broward
        </div>
      </section>
    </>
  );
}
