import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/pristine/logo.png";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/quote", label: "Quote" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group shrink-0">
          <img src={logo} alt="Pristine Auto Detailing" className="h-9 w-9 rounded-sm" />
          <span className="font-display text-lg tracking-tight uppercase">
            Pristine<span className="text-electric">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-electric" }}
              className="hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+17577625110"
            className="hidden lg:flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-electric transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            (757) 762-5110
          </a>
          <Link
            to="/book"
            className="hidden sm:inline-flex bg-electric text-ink px-4 py-2 text-xs font-bold uppercase tracking-tight hover:bg-foreground transition-colors"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm font-mono uppercase tracking-[0.2em]">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-electric" }}
                className="py-3 border-b border-border/50 text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-4 bg-electric text-ink text-center px-4 py-3 text-xs font-bold uppercase tracking-tight"
            >
              Book Now
            </Link>
            <a
              href="tel:+17577625110"
              className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground py-2"
            >
              <Phone className="h-3.5 w-3.5" />
              (757) 762-5110
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
