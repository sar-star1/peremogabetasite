import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Menu, X, ShoppingBag } from "lucide-react";
import peremogaLogo from "@/assets/peremoga-logo.jpg";

const navItems = [
  { label: "B2B", href: "/b2b", isRoute: true },
  { label: "Завітайте", href: "/clients", isRoute: true },
  { label: 'Хліб "Перемога"', href: "/charity-bread", isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Головна навігація Peremoga Bakery"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        scrolled ? "border-b border-border py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Wordmark left */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display-black text-foreground text-base md:text-lg tracking-tight">
            PEREMOGA
          </span>
          <span className="font-display-black text-foreground text-base md:text-lg tracking-tight">
            BAKERY
          </span>
        </Link>

        {/* Center city tag */}
        <div className="hidden md:flex flex-1 justify-center">
          <span className="font-body text-[11px] uppercase tracking-[0.4em] text-foreground">
            Kyiv
          </span>
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-body text-[11px] uppercase tracking-[0.3em] text-foreground hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/peremogabakery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-xs uppercase tracking-[0.3em] text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/peremogabakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs uppercase tracking-[0.3em] text-foreground inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} /> Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
