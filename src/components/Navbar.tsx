import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/peremoga-logo.jpg";

const navItems = [
  { label: "B2B", href: "/b2b", isRoute: true },
  { label: "Завітайте", href: "/clients", isRoute: true },
  { label: 'Хліб "Перемога"', href: "/charity-bread", isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Головна навігація Peremoga Bakery"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 text-primary">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Peremoga Bakery"
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span
            className={`font-display text-xl font-semibold tracking-wide transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Peremoga
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[13px] font-body font-light uppercase tracking-[0.2em] transition-colors hover:text-warm-gold ${
                  scrolled ? "text-foreground/70" : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] font-body font-light uppercase tracking-[0.2em] transition-colors hover:text-warm-gold ${
                  scrolled ? "text-foreground/70" : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/peremogabakery/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors hover:text-warm-gold ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body font-light uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body font-light uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
