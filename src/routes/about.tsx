import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Leaf, Award, Heart } from "lucide-react";
import full from "@/assets/pristine/full.jpg";
import ceramic from "@/assets/pristine/ceramic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Local Miami mobile detailers who treat every car like our own. Insured, experienced, eco-friendly.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Every car matters", text: "From a beat-up Civic to a Rolls Royce — same care, same standards." },
  { icon: Shield, title: "Fully insured", text: "Licensed, bonded, and insured to protect you and your vehicle." },
  { icon: Leaf, title: "Eco-friendly", text: "Biodegradable products and water-saving techniques." },
  { icon: Award, title: "5.0 rated", text: "40+ five-star Google reviews from real Miami customers." },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
              About Pristine
            </div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.85] mb-6">
              A Miami<br />original.
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pristine Auto Detailing started with a simple idea: high-end
                detailing shouldn't require driving across town and losing
                your Saturday. We bring the shop to your driveway.
              </p>
              <p>
                Today we serve hundreds of Miami families, executives, and
                exotic car owners across Brickell, Miami Beach, Coral Gables,
                Doral, and all the way up to Fort Lauderdale.
              </p>
              <p>
                Every detail is performed by trained, insured professionals
                using premium products. Whether it's your daily commuter or
                your weekend exotic, we treat it like it's our own.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={full} alt="" className="aspect-[3/4] object-cover" />
            <img src={ceramic} alt="" className="aspect-[3/4] object-cover mt-12" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-12 max-w-xl">
            What we stand for.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <v.icon className="h-7 w-7 text-electric mb-5" />
                <h3 className="font-display text-xl uppercase mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Let's make your car shine.
          </h2>
          <Link
            to="/book"
            className="inline-block bg-electric text-ink px-8 py-4 font-bold uppercase text-xs tracking-tight"
          >
            Book Your Detail
          </Link>
        </div>
      </section>
    </>
  );
}
