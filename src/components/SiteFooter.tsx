import { Link } from "@tanstack/react-router";
import logo from "@/assets/pristine/logo.png";

const MIAMI_ZIPS = [
  "33101", "33109", "33125", "33126", "33127", "33128", "33129",
  "33130", "33131", "33132", "33133", "33134", "33135", "33136",
  "33137", "33138", "33139", "33140", "33141", "33142", "33143",
  "33144", "33145", "33146", "33147", "33149", "33150", "33154",
  "33155", "33156", "33157", "33158", "33160", "33161", "33162",
  "33165", "33166", "33167", "33168", "33169", "33170", "33172",
  "33173", "33174", "33175", "33176", "33177", "33178", "33179",
  "33180", "33181", "33182", "33183", "33184", "33185", "33186",
  "33187", "33189", "33190", "33193", "33194", "33196",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src={logo} alt="Pristine" className="h-7 w-auto" />
              <span className="font-display text-xl uppercase">Pristine.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium mobile auto detailing across Miami-Dade & Broward. Not just clean — it's Pristine. We do any car.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-4">Service Areas</div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {["Brickell", "Miami Beach", "Coral Gables", "Doral · Kendall", "Hialeah", "Fort Lauderdale", "Homestead", "Aventura"].map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-4">Quick Links</div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                { to: "/services", label: "Services" },
                { to: "/membership", label: "Membership" },
                { to: "/gallery", label: "Gallery" },
                { to: "/quote", label: "Get a Quote" },
                { to: "/book", label: "Book Now" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-electric transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-4">Get in Touch</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+17577841773" className="hover:text-electric transition-colors">(757) 784-1773</a>
              </li>
              <li>
                <a href="https://wa.me/17577841773" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">WhatsApp</a>
              </li>
              <li>
                <a href="https://instagram.com/prisitinedetail757" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">@prisitinedetail757</a>
              </li>
              <li>
                <Link to="/book" className="hover:text-electric transition-colors">Book Online</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ZIP Code SEO block — hidden visually but present for SEO */}
        <div className="border-t border-border pt-6 mb-6">
          <p className="text-[10px] text-muted-foreground/40 leading-relaxed font-mono">
            Serving Miami-Dade County zip codes: {MIAMI_ZIPS.join(", ")} · Mobile auto detailing Miami FL · Car detailing Miami Beach · Auto detailing Coral Gables · Mobile detailing Brickell · Ceramic coating Miami · Paint correction Miami
          </p>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
          <span>© 2026 Pristine Auto Detailing · Miami, FL</span>
          <span>Insured · Eco-Friendly · Not just clean, it's Pristine</span>
        </div>
      </div>
    </footer>
  );
}
