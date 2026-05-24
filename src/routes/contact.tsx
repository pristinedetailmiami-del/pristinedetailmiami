import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Call, text, or WhatsApp Pristine Auto Detailing. Serving all of Miami-Dade and Broward.",
      },
    ],
  }),
  component: ContactPage,
});

const FAQS = [
  {
    q: "How long does a detail take?",
    a: "Most exterior details run 1.5–2 hours. Full details run 4–5 hours. Paint correction and ceramic coatings can take a full day depending on vehicle size and condition.",
  },
  {
    q: "Do I need to be home?",
    a: "Not at all. As long as we can access your vehicle and a water/power source (or we'll bring our own), you can be at work or running errands.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, eco-friendly products: Chemical Guys, Gyeon, Adam's Polishes, and pro-grade ceramic coatings. Safe for paint, leather, and the environment.",
  },
  {
    q: "Where do you service?",
    a: "All of Miami-Dade and Broward — Brickell, Miami Beach, Coral Gables, Hialeah, Doral, Kendall, Fort Lauderdale, Homestead, and everywhere in between.",
  },
  {
    q: "Do you take exotic cars?",
    a: "Absolutely. We've detailed everything from Porsches and Lambos to Rolls Royces. Trained, insured, and equipped for any vehicle.",
  },
  {
    q: "How do I pay?",
    a: "Card, Apple Pay, Zelle, or cash on completion. A small deposit may be required at booking for premium services.",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </div>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85]">
            Let's<br />talk shine.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-3">
            <ContactCard
              icon={Phone}
              label="Call or Text"
              value="(757) 762-5110"
              href="tel:+17577625110"
              cta="Tap to call"
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Message us anytime"
              href="https://wa.me/17577625110"
              cta="Open chat"
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value="hello@pristine-detail.com"
              href="mailto:hello@pristine-detail.com"
              cta="Send email"
            />
            <ContactCard
              icon={MapPin}
              label="Service Area"
              value="Miami-Dade & Broward, FL"
              href="#"
              cta="See coverage"
            />
          </div>

          <div className="border border-border p-8 bg-card/30">
            <h2 className="font-display text-3xl uppercase mb-6">Send a message</h2>
            {sent ? (
              <div className="text-center py-12">
                <Check className="h-10 w-10 text-electric mx-auto mb-4" />
                <div className="font-display text-2xl uppercase">Got it.</div>
                <p className="text-muted-foreground mt-2">We'll get back within an hour.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <Input label="Name" type="text" required />
                <Input label="Phone" type="tel" required />
                <Input label="Email" type="email" required />
                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-electric text-ink py-4 text-xs font-bold uppercase tracking-tight"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-10">
            Common questions.
          </h2>
          <div className="space-y-px bg-border border border-border">
            {FAQS.map((f, i) => (
              <details key={i} className="bg-background group">
                <summary className="cursor-pointer p-6 flex items-center justify-between font-display text-lg uppercase">
                  {f.q}
                  <span className="text-electric text-2xl font-thin group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed -mt-2">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon, label, value, href, cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string; value: string; href: string; cta: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block border border-border bg-card/30 hover:border-electric hover:bg-card transition-colors p-6 group"
    >
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-electric" />
        </div>
        <div className="flex-1">
          <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-1">
            {label}
          </div>
          <div className="font-display text-2xl uppercase">{value}</div>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center">
          {cta} →
        </div>
      </div>
    </a>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      <input
        {...props}
        className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
      />
    </label>
  );
}
