import { DiamondBg } from './DiamondBg';
import { useGsapReveal } from '../hooks/useGsapReveal';

export function CTA() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} id="contato" className="relative bg-black py-24 sm:py-32 text-center overflow-hidden border-t border-white/5">
      <DiamondBg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[150vw]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <img src="/images/logo.svg" alt="Sette IA" className="gsap-img h-8 sm:h-10 w-auto" />
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-3px] leading-none text-white mb-12">
          VAMOS TRABALHAR<br />JUNTOS?
        </h2>

        <div className="gsap-stagger flex gap-4 justify-center flex-wrap mb-20">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-10 py-5 rounded font-mono text-sm tracking-widest uppercase hover:bg-blue-hover transition-all hover:-translate-y-0.5 border border-blue"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@setteia.com"
            className="text-white px-10 py-5 rounded font-mono text-sm tracking-widest uppercase border border-white/20 hover:border-white/50 transition-all hover:-translate-y-0.5"
          >
            Enviar E-mail
          </a>
        </div>

        <p className="gsap-fade font-mono text-xs tracking-[4px] uppercase text-white/40">
          SETTE IA ® 2026
        </p>
      </div>
    </section>
  );
}
