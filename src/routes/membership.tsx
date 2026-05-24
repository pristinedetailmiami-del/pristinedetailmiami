import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Crown, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Monthly Detailing Membership Miami | Pristine Auto Detailing" },
      {
        name: "description",
        content:
          "Save up to 20% with a Pristine Auto Detailing monthly membership in Miami. Fresh Start $79/mo, Pro Care $149/mo, Black Card $299/mo. No contracts. Cancel anytime.",
      },
      { name: "keywords", content: "monthly car detailing Miami, auto detailing membership Miami, recurring mobile detailing Miami-Dade" },
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
  ctaText: string;
  whatsappMsg: string;
};

const PLANS: Plan[] = [
  {
    id: "fresh",
    name: "Fresh Start",
    tagline: "Keep your ride looking sharp year-round",
    price: 79,
    highlight: "Save 10% on all services",
    ctaText: "Start Fresh",
    whatsappMsg: "Hi Pristine! I'd like to sign up for the Fresh Start membership ($79/mo).",
    perks: [
      "1 exterior & interior detail monthly",
      "10% off add-on treatments",
      "Flexible online scheduling",
      "Complimentary air freshener",
      "Mobile service to your location",
    ],
  },
  {
    id: "pro",
    name: "Pro Care",
    tagline: "For drivers who demand showroom quality every time",
    price: 149,
    badge: "Most Popular",
    featured: true,
    highlight: "Save 15% on all services",
    ctaText: "Go Pro",
    whatsappMsg: "Hi Pristine! I'd like to sign up for the Pro Care membership ($149/mo).",
    perks: [
      "2 full details per month",
      "15% off all additional services",
      "Priority same-day appointments",
      "Free tire shine & trim dressing",
      "Exclusive member rewards",
      "Mobile service to your location",
    ],
  },
  {
    id: "black",
    name: "Black Card",
    tagline: "White-glove service for discerning owners",
    price: 299,
    highlight: "Save 20% on all services",
    ctaText: "Get Black Card",
    whatsappMsg: "Hi Pristine! I'd like to sign up for the Black Card membership ($299/mo).",
    perks: [
      "4 premium details per month",
      "20% off every service",
      "Personal detailing specialist",
      "Free pickup & delivery",
      "Yearly paint enhancement included",
      "First priority scheduling",
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

      {/* PLANS */}
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

              {/* Primary CTA — WhatsApp to sign up */}
              <a
                href={`https://wa.me/17577841773?text=${encodeURIComponent(p.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-tight transition-colors mb-3 ${
                  p.featured
                    ? "bg-electric text-ink hover:bg-foreground hover:text-background"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {p.ctaText} via WhatsApp
              </a>

              <a
                href="tel:+17577841773"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-3 w-3" />
                Or call (757) 784-1773
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">
          No contracts · Cancel anytime · Miami-Dade & Broward
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 py-16 border-t border-border bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-10">How membership works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Pick a Plan", desc: "Choose the membership that fits your lifestyle. Message us on WhatsApp or call to get started in minutes." },
              { step: "02", title: "We Schedule You", desc: "We'll lock in your recurring monthly dates based on your schedule. Priority members get first pick." },
              { step: "03", title: "We Come Monthly", desc: "Sit back. Every month your car gets a professional detail, right where you are. No reminders needed." },
            ].map((s) => (
              <div key={s.step} className="border border-border p-6">
                <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-3">{s.step}</div>
                <h3 className="font-display text-2xl uppercase mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl uppercase mb-8">Membership FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Can I cancel anytime?", a: "Yes — no contracts, no cancellation fees. Just let us know before your next billing date." },
              { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. Message us any time and we'll adjust your plan for the next billing cycle." },
              { q: "Does my detail roll over if I miss a month?", a: "Details don't roll over, but we'll always work with you to reschedule if something comes up." },
              { q: "How do I pay?", a: "We'll set up a simple recurring payment via Square. You'll be charged monthly on your signup date." },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
