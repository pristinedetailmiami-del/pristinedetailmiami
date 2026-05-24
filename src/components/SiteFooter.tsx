import { Link } from "@tanstack/react-router";
import logo from "@/assets/pristine/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Pristine" className="h-10 w-10 rounded-sm" />
              <span className="font-display text-xl uppercase tracking-tight">
                Pristine<span className="text-electric">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium mobile auto detailing across Miami-Dade & Broward. We do any car —
              from daily drivers to exotics.
            </p>
          </div>
          <div>
            <div className="text-electric font-mono text-[10px] uppercase mb-5 tracking-[0.2em]">
              Service Areas
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Brickell</li>
              <li>Miami Beach</li>
              <li>Coral Gables</li>
              <li>Doral · Kendall</li>
              <li>Fort Lauderdale</li>
            </ul>
          </div>
          <div>
            <div className="text-electric font-mono text-[10px] uppercase mb-5 tracking-[0.2em]">
              Get in Touch
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:+17577625110" className="hover:text-foreground">
                  (757) 762-5110
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/17577625110"
                  className="hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pristinedetail757"
                  className="hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link to="/book" className="hover:text-foreground">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-border text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} Pristine Auto Detailing · Miami, FL</div>
          <div>Insured · Eco-Friendly · We Do Any Car</div>
        </div>
      </div>
    </footer>
  );
}
