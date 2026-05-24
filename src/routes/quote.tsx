import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Instant Quote — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Get a transparent price in seconds. Pick your vehicle and package — no phone tag, no hidden fees.",
      },
    ],
  }),
  component: QuotePage,
});

type VehicleType = "sedan" | "suv" | "exotic";

const VEHICLES: { id: VehicleType; label: string; mult: number }[] = [
  { id: "sedan", label: "Sedan / Coupe", mult: 1 },
  { id: "suv", label: "SUV / Truck / Van", mult: 1.15 },
  { id: "exotic", label: "Luxury / Exotic", mult: 1.4 },
];

function QuotePage() {
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");
  const [serviceId, setServiceId] = useState(SERVICES[0].id);

  const service = SERVICES.find((s) => s.id === serviceId)!;
  const v = VEHICLES.find((x) => x.id === vehicle)!;
  const basePrice = vehicle === "suv" ? service.suvPrice : service.sedanPrice;
  const price = Math.round(basePrice * (vehicle === "exotic" ? v.mult : 1));

  return (
    <section className="px-6 md:px-12 py-20 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Instant Quote
          </div>
          <h1 className="font-display text-5xl md:text-7xl uppercase mb-4">
            Two questions.<br />One price.
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                01 · Vehicle Type
              </div>
              <div className="grid grid-cols-3 gap-2">
                {VEHICLES.map((veh) => (
                  <button
                    key={veh.id}
                    onClick={() => setVehicle(veh.id)}
                    className={`p-5 border text-sm font-medium uppercase tracking-tight transition-all ${
                      vehicle === veh.id
                        ? "border-electric bg-electric/10 text-electric"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    {veh.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                02 · Service Package
              </div>
              <div className="space-y-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`w-full p-5 border text-left flex items-center justify-between gap-4 transition-all ${
                      serviceId === s.id
                        ? "border-electric bg-electric/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div>
                      <div className="font-display text-xl uppercase">{s.name}</div>
                      <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                        {s.tagline} · {s.duration}
                      </div>
                    </div>
                    <div className="font-display text-xl text-electric">
                      ${vehicle === "suv" ? s.suvPrice : s.sedanPrice}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-card border border-border p-8">
              <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-2">
                Your Quote
              </div>
              <div className="font-display text-2xl uppercase leading-tight mb-6">
                {service.name}
              </div>
              <div className="space-y-3 mb-8 pb-8 border-b border-border text-sm">
                <Row label="Vehicle" value={v.label} />
                <Row label="Duration" value={service.duration} />
                <Row label="Mobile fee" value="Included" />
              </div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Starting at
                  </div>
                  <div className="font-display text-6xl text-electric">${price}</div>
                </div>
              </div>
              <Link
                to="/book"
                search={{ service: serviceId }}
                className="w-full bg-electric text-ink py-4 px-6 text-xs font-bold uppercase tracking-tight flex items-center justify-center gap-2"
              >
                Book This Service <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-[10px] text-muted-foreground text-center mt-4 font-mono uppercase tracking-wider">
                Final price confirmed after inspection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
