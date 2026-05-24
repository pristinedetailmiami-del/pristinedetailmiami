import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Mobile Detailing Miami | Pristine Auto Detailing" },
      {
        name: "description",
        content:
          "Book your mobile auto detailing in Miami online. We come to your home, office, or apartment. Serving Brickell, Miami Beach, Coral Gables & all Miami-Dade.",
      },
      { name: "keywords", content: "book car detailing Miami, mobile detailing appointment Miami, auto detail booking Miami Beach" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Book Online
          </div>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] max-w-4xl mb-4">
            Reserve your<br />detail.
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Pick your service, choose a time, and we'll come to you. A $25 deposit is required to confirm your booking — applied to your total.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Square Appointments Embed */}
          {/* 
            TO ACTIVATE:
            1. Go to squareup.com and create a free account
            2. Go to Appointments > Online Booking > Share
            3. Click "Embed" and copy the iframe code
            4. Replace the placeholder div below with your Square iframe
          */}
          <div className="w-full min-h-[600px] border border-border bg-card/40 flex flex-col items-center justify-center gap-6 p-10 text-center">
            <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em]">
              Online Booking
            </div>
            <h2 className="font-display text-4xl uppercase">
              Booking Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Our online booking system is being set up. In the meantime, book instantly via WhatsApp or give us a call — we'll get you scheduled same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a
                href="https://wa.me/17577841773?text=Hi%20Pristine!%20I%27d%20like%20to%20book%20a%20detail."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 font-bold uppercase text-xs tracking-tight"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:+17577841773"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-border px-6 py-4 font-bold uppercase text-xs tracking-tight hover:bg-secondary transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              (757) 784-1773 · Available 7 days a week
            </p>
          </div>

          {/* Uncomment and paste your Square embed here once ready:
          <iframe
            src="YOUR_SQUARE_BOOKING_URL_HERE"
            width="100%"
            height="800"
            frameBorder="0"
            title="Book Pristine Auto Detailing"
          />
          */}

        </div>
      </section>

      {/* What to expect */}
      <section className="px-6 md:px-12 py-16 border-t border-border bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl uppercase mb-10">What to expect</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Book Online", desc: "Pick your service and time. A $25 deposit locks in your spot and is applied to your total." },
              { step: "02", title: "We Come To You", desc: "Our team shows up to your home, office, or parking garage fully equipped — no hookups needed." },
              { step: "03", title: "Drive Away Clean", desc: "We text you when we start and when we're done. Pay the balance on completion. Done." },
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
    </>
  );
}
