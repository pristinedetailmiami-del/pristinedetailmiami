import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/pristine/logo.png";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
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
        <div className="flex items-center gap-3">
          <a
            href="tel:+17577625110"
            className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-electric transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            (757) 762-5110
          </a>
          <Link
            to="/book"
            className="bg-electric text-ink px-4 py-2 text-xs font-bold uppercase tracking-tight hover:bg-foreground transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
