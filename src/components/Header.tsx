import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "¿Por qué Atria?", href: "#porque" },
  { label: "Compañías", href: "#companias" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold gradient-text-accent">A1</span>
            <span className="text-xl font-bold text-foreground ml-1">Atria One</span>
            <span className="text-xs text-muted-foreground ml-1.5 hidden sm:block">Seguros</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-accent-foreground transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "var(--gradient-accent)" }}
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-center text-accent-foreground"
              style={{ background: "var(--gradient-accent)" }}
            >
              Cotizar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
