import { Link } from "@tanstack/react-router";
import { useState, createContext, useContext } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/pristine/logo.png";

// Language context — export so other components can use it
export type Lang = "en" | "es";
export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});
export const useLang = () => useContext(LangContext);

const NAV_LABELS = {
  en: { services: "Services", membership: "Membership", gallery: "Gallery", quote: "Quote", about: "About", contact: "Contact", book: "Book Now" },
  es: { services: "Servicios", membership: "Membresía", gallery: "Galería", quote: "Cotizar", about: "Nosotros", contact: "Contacto", book: "Reservar" },
};

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = NAV_LABELS[lang];

  const navLinks = [
    { to: "/services", label: t.services },
    { to: "/membership", label: t.membership },
    { to: "/gallery", label: t.gallery },
    { to: "/quote", label: t.quote },
    { to: "/about", label: t.about },
    { to: "/contact", label: t.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Pristine Auto Detailing" className="h-6 w-auto" />
          <span className="font-display text-lg uppercase tracking-tight">Pristine.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1.5 hover:border-electric hover:text-electric transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          <a
            href="tel:+17577841773"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-electric transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            (757) 784-1773
          </a>

          <Link
            to="/book"
            className="bg-electric text-ink px-4 py-2 text-[11px] font-bold uppercase tracking-tight hover:bg-foreground transition-colors"
          >
            {t.book}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-electric transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <a href="tel:+17577841773" className="font-mono text-sm text-muted-foreground hover:text-electric">
              (757) 784-1773
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] border border-border px-2.5 py-1.5 hover:border-electric hover:text-electric transition-colors"
            >
              {lang === "en" ? "Español" : "English"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
