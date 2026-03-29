import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DiamondBgAnimated } from './DiamondBg';
import { asset } from '../utils/asset';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // On-mount entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-logo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2 })
        .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-btn', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')
        .fromTo('.hero-footer-item', { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.2 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 overflow-hidden bg-black"
    >
      <DiamondBgAnimated className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[150vw]" />

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-14">
          <img
            src={asset('/images/logo.svg')}
            alt="Sette IA - Agentes Inteligentes e Automação"
            className="hero-logo w-[240px] sm:w-[340px] lg:w-[420px] h-auto"
          />
        </div>

        <p className="hero-desc font-mono text-sm sm:text-base leading-relaxed text-white/50 mb-12 max-w-xl mx-auto">
          Transformamos empresas com agentes de IA que trabalham 24/7,
          escalam sem custo extra e aprendem com cada interação.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contato"
            className="hero-btn bg-blue text-white px-8 py-4 rounded font-mono text-sm tracking-widest uppercase hover:bg-blue-hover transition-all hover:-translate-y-0.5 border border-blue"
          >
            Agendar Reunião
          </a>
          <a
            href="#sobre"
            className="hero-btn text-white px-8 py-4 rounded font-mono text-sm tracking-widest uppercase border border-white/20 hover:border-white/50 transition-all hover:-translate-y-0.5"
          >
            Saiba Mais
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 right-6 flex justify-between items-center max-w-[1200px] mx-auto flex-col sm:flex-row gap-4">
        <span className="hero-footer-item font-mono text-xs tracking-[4px] uppercase text-white/40">
          //SETTE IA ® 2026
        </span>
        <span className="hero-footer-item font-mono text-xs tracking-[4px] uppercase text-white/40 px-6 py-3 border border-white/15">
          PROPOSTA VÁLIDA POR 7 DIAS
        </span>
      </div>
    </section>
  );
}
