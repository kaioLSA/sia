import { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { asset } from '../utils/asset';

gsap.registerPlugin(ScrollTrigger);

const linksLeft = [
  { target: 'sobre', label: 'Sobre' },
  { target: 'oportunidade', label: 'Oportunidade' },
  { target: 'metodologia', label: 'Metodologia' },
];

const linksRight = [
  { target: 'servicos', label: 'Serviços' },
  { target: 'investimento', label: 'Investimento' },
];

const allLinks = [...linksLeft, ...linksRight];

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const target = el.getBoundingClientRect().top + window.scrollY;
  const start = window.scrollY;
  const distance = target - start;
  const duration = 1000;
  const startTime = performance.now();

  // Pause ScrollTrigger during animated scroll
  ScrollTrigger.getAll().forEach((st) => st.disable());

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function tick() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = start + distance * easeInOutCubic(progress);

    window.scroll(0, value);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      // Re-enable ScrollTrigger and refresh positions
      ScrollTrigger.getAll().forEach((st) => st.enable());
      ScrollTrigger.refresh();
    }
  }

  requestAnimationFrame(tick);
}

export function Navbar({ visible = true }: { visible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navigate = useCallback((id: string) => {
    if (menuOpen) {
      closeMenu();
      setTimeout(() => smoothScroll(id), 350);
    } else {
      smoothScroll(id);
    }
  }, [menuOpen]);

  const linkClass = "font-mono text-[11px] tracking-[2px] uppercase text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? undefined : 'none' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Desktop: centered layout with logo in the middle */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {linksLeft.map((link) => (
              <button
                key={link.target}
                onClick={() => navigate(link.target)}
                className={linkClass}
              >
                {link.label}
              </button>
            ))}

            {/* Logo icon centered */}
            <button onClick={() => navigate('hero')} className="mx-4 bg-transparent border-none cursor-pointer">
              <img
                src={asset('/images/logo-icon.svg')}
                alt="Sette IA"
                className="h-8 w-auto"
              />
            </button>

            {linksRight.map((link) => (
              <button
                key={link.target}
                onClick={() => navigate(link.target)}
                className={linkClass}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => navigate('contato')}
              className="bg-blue text-white px-5 py-2 rounded font-mono text-[11px] tracking-[2px] uppercase hover:bg-blue-hover transition-colors cursor-pointer border-none"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile: logo left, hamburger right */}
          <div className="md:hidden flex items-center justify-between">
            <button onClick={() => navigate('hero')} className="bg-transparent border-none cursor-pointer">
              <img src={asset('/images/logo-icon.svg')} alt="Sette IA" className="h-6 w-auto" />
            </button>
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

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile side panel — right half */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-[65%] max-w-[300px] bg-black/95 backdrop-blur-xl border-l border-white/10 flex flex-col pt-24 px-8 gap-6 transition-transform duration-300 ease-out md:hidden overscroll-none ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {allLinks.map((link, i) => (
          <button
            key={link.target}
            onClick={() => navigate(link.target)}
            className="font-mono text-sm tracking-widest uppercase text-white/70 hover:text-white transition-all bg-transparent border-none cursor-pointer text-left"
            style={{
              transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transitionProperty: 'opacity, transform, color',
              transitionDuration: '300ms',
            }}
          >
            {link.label}
          </button>
        ))}

        <div className="mt-4 pt-4 border-t border-white/10">
          <button
            onClick={() => navigate('contato')}
            className="w-full text-center bg-blue text-white px-6 py-3 rounded font-mono text-xs tracking-widest uppercase hover:bg-blue-hover transition-all cursor-pointer border-none"
            style={{
              transitionDelay: menuOpen ? `${allLinks.length * 50}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transitionProperty: 'opacity, transform, background-color',
              transitionDuration: '300ms',
            }}
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </>
  );
}
