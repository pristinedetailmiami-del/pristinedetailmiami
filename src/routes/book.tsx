import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Calendar, Car, User, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/services";

type BookSearch = { service?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): BookSearch => ({
    service: typeof s.service === "string" ? s.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Online — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Book mobile auto detailing in Miami. Pick a date, time, and service. We come to you.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const search = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [serviceId, setServiceId] = useState(search.service ?? SERVICES[0].id);
  const [vehicle, setVehicle] = useState("sedan");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const service = SERVICES.find((s) => s.id === serviceId)!;
  const price = vehicle === "suv" ? service.suvPrice : service.sedanPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section className="px-6 md:px-12 py-32 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center mx-auto mb-8">
            <Check className="h-8 w-8 text-electric" />
          </div>
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Booking Received
          </div>
          <h1 className="font-display text-5xl md:text-6xl uppercase mb-6">
            See you {date && `on ${date}`}.
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thanks {name}! We've received your request for <span className="text-foreground">{service.name}</span>.
            We'll confirm via SMS at <span className="text-foreground">{phone}</span> within 30 minutes.
          </p>
          <a
            href="tel:+17577625110"
            className="inline-block border border-border px-6 py-3 text-xs font-bold uppercase tracking-tight hover:bg-secondary"
          >
            Or call us: (757) 762-5110
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Book Online · ~60 Seconds
          </div>
          <h1 className="font-display text-5xl md:text-7xl uppercase">
            Lock in your slot.
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <FormSection icon={Car} step="01" title="Service & Vehicle">
              <div className="space-y-4">
                <Field label="Service Package">
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — from ${s.sedanPrice}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Vehicle Type">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { v: "sedan", l: "Sedan" },
                      { v: "suv", l: "SUV / Truck" },
                      { v: "exotic", l: "Exotic" },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => setVehicle(opt.v)}
                        className={`p-3 border text-xs uppercase font-bold tracking-tight ${
                          vehicle === opt.v
                            ? "border-electric bg-electric/10 text-electric"
                            : "border-border"
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
            </FormSection>

            <FormSection icon={Calendar} step="02" title="Date & Time">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Date">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                  />
                </Field>
                <Field label="Time">
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                  >
                    <option value="">Select time</option>
                    {["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </FormSection>

            <FormSection icon={MapPin} step="03" title="Service Address">
              <Field label="Street Address (Miami area)">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="123 Brickell Ave, Miami, FL"
                  className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                />
              </Field>
            </FormSection>

            <FormSection icon={User} step="04" title="Contact Info">
              <div className="space-y-4">
                <Field label="Full Name">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                  />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="(305) 555-0123"
                      className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-input border border-border p-3 text-sm focus:border-electric outline-none"
                    />
                  </Field>
                </div>
              </div>
            </FormSection>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border bg-card p-8">
              <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-2">
                Order Summary
              </div>
              <div className="font-display text-2xl uppercase mb-6">
                {service.name}
              </div>
              <div className="space-y-3 text-sm mb-6 pb-6 border-b border-border">
                <Row label="Vehicle" value={vehicle} />
                <Row label="Date" value={date || "—"} />
                <Row label="Time" value={time || "—"} />
                <Row label="Duration" value={service.duration} />
              </div>
              <div className="flex justify-between items-end mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Total
                </span>
                <span className="font-display text-4xl text-electric">${price}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-electric text-ink py-4 text-xs font-bold uppercase tracking-tight hover:bg-foreground transition-colors"
              >
                Confirm Booking
              </button>
              <p className="text-[10px] text-muted-foreground text-center mt-4 font-mono uppercase tracking-wider">
                SMS confirmation sent on submit
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormSection({
  icon: Icon, step, title, children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  step: string; title: string; children: React.ReactNode;
}) {
  return (
    <div className="border border-border p-6 md:p-8 bg-card/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-sm bg-electric/10 border border-electric/30 flex items-center justify-center">
          <Icon className="h-4 w-4 text-electric" />
        </div>
        <div>
          <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em]">
            Step {step}
          </div>
          <div className="font-display text-xl uppercase">{title}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground capitalize">{value}</span>
    </div>
  );
}
