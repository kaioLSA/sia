import { useState, useEffect } from 'react';

const linksLeft = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#oportunidade', label: 'Oportunidade' },
  { href: '#metodologia', label: 'Metodologia' },
];

const linksRight = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#investimento', label: 'Investimento' },
];

const allLinks = [...linksLeft, ...linksRight];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = "font-mono text-[11px] tracking-[2px] uppercase text-white/60 hover:text-white transition-colors";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Desktop: centered layout with logo in the middle */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {linksLeft.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}

            {/* Logo icon centered */}
            <a href="#hero" className="mx-4">
              <img
                src="/images/logo-icon.svg"
                alt="Sette IA"
                className="h-8 w-auto"
              />
            </a>

            {linksRight.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}

            <a
              href="#contato"
              className="bg-blue text-white px-5 py-2 rounded font-mono text-[11px] tracking-[2px] uppercase hover:bg-blue-hover transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile: logo left, hamburger right */}
          <div className="md:hidden flex items-center justify-between">
            <a href="#hero">
              <img src="/images/logo-icon.svg" alt="Sette IA" className="h-6 w-auto" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center gap-8">
          {allLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-mono text-lg tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={closeMenu}
            className="bg-blue text-white px-8 py-3 rounded font-mono text-sm tracking-widest uppercase"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </>
  );
}
