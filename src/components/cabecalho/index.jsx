import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import "./index.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "is-scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">
        <a href="#home" className="brand-logo">
          JE <span>Construções</span>
        </a>

        {/* Menu Desktop */}
        <nav className="nav-desktop">
          <a href="#home" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#sobre-nos" className="nav-link">Sobre</a>
          <a href="https://wa.me/5511942296530" className="btn-cta-header">
            <Phone size={14} />
            <span>Orçamento</span>
          </a>
        </nav>

        {/* Botão Mobile */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay do Menu Mobile */}
      <div className={`nav-mobile-overlay ${mobileMenuOpen ? "show" : ""}`}>
        <nav>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Início</a>
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
          <a href="#sobre-nos" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="https://wa.me/5511942296530" className="btn-mobile">Solicitar Orçamento Técnico</a>
        </nav>
      </div>
    </header>
  );
}