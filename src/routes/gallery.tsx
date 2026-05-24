import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
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

// Before/After pairs — using available images as stand-ins
const BEFORE_AFTER = [
  { before: int2, after: interior, label: "Interior Restoration" },
  { before: ext2, after: exterior, label: "Exterior Detail" },
  { before: correction, after: ceramic, label: "Paint Correction" },
];

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging.current) updatePos(e.clientX);
  }, [updatePos]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  }, [updatePos]);

  return (
    <div className="relative">
      <div className="font-mono text-[10px] text-electric uppercase tracking-[0.3em] mb-3">{label}</div>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden bg-card cursor-col-resize select-none"
        onMouseMove={onMouseMove}
        onMouseDown={() => { dragging.current = true; }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchMove={onTouchMove}
      >
        {/* AFTER (base) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

        {/* BEFORE (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: "none" }} />
        </div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-electric z-10" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-electric rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink">
              <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] bg-background/80 px-2 py-1 text-muted-foreground">Before</div>
        <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] bg-electric/90 px-2 py-1 text-ink">After</div>
      </div>
      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">← Drag to compare →</p>
    </div>
  );
}

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery | Pristine Auto Detailing Miami" },
      {
        name: "description",
        content:
          "See real before-and-after transformations from Pristine Auto Detailing Miami. Interior deep cleans, exterior details, paint correction, and ceramic coating results.",
      },
      { name: "keywords", content: "car detailing before after Miami, auto detail results Miami, paint correction Miami, ceramic coating Miami before after" },
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

      {/* BEFORE / AFTER SLIDERS */}
      <section className="px-6 md:px-12 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.3em] mb-3">
            Before & After
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-10">
            See the difference.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BEFORE_AFTER.map((pair) => (
              <BeforeAfterSlider key={pair.label} {...pair} />
            ))}
          </div>
        </div>
      </section>

      {/* GRID GALLERY */}
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
