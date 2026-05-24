import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import interior from "@/assets/pristine/interior.png";
import exterior from "@/assets/pristine/exterior.jpg";
import ceramic from "@/assets/pristine/ceramic.jpg";
import full from "@/assets/pristine/full.jpg";
import int2 from "@/assets/pristine/int2.jpg";
import ext2 from "@/assets/pristine/ext2.jpg";
import addons from "@/assets/pristine/addons.jpg";
import correction from "@/assets/pristine/correction.jpg";
import coating from "@/assets/pristine/coating.jpg";
import gallery1 from "@/assets/pristine/gallery1.jpg";

type Cat = "all" | "interior" | "exterior" | "correction";

const ITEMS: { img: string; cat: Exclude<Cat, "all">; label: string }[] = [
  { img: interior, cat: "interior", label: "Interior deep clean" },
  { img: full, cat: "interior", label: "Full interior restoration" },
  { img: int2, cat: "interior", label: "Steam treatment" },
  { img: exterior, cat: "exterior", label: "Hand wash & wax" },
  { img: ext2, cat: "exterior", label: "Paint sealant" },
  { img: gallery1, cat: "exterior", label: "Daily driver refresh" },
  { img: ceramic, cat: "correction", label: "Ceramic finish" },
  { img: correction, cat: "correction", label: "Paint correction" },
  { img: coating, cat: "correction", label: "Coating application" },
  { img: addons, cat: "exterior", label: "Trim & extras" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "Real before-and-after transformations from our Miami mobile detailing team. Interior, exterior, paint correction.",
      },
      { property: "og:image", content: ceramic },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("all");
  const items = cat === "all" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <section className="px-6 md:px-12 pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-4">
            Our Work
          </div>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] max-w-4xl">
            Real cars.<br />Real results.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {(["all", "interior", "exterior", "correction"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] border transition-colors ${
                  cat === c
                    ? "border-electric bg-electric text-ink"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {c === "all" ? "All Work" : c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className="group relative aspect-square overflow-hidden bg-card"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div>
                    <div className="font-mono text-[10px] text-electric uppercase tracking-[0.2em] mb-1">
                      {item.cat}
                    </div>
                    <div className="font-display text-lg uppercase">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
