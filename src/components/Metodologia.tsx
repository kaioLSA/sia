import { DiamondBg } from './DiamondBg';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { asset } from '../utils/asset';

export function Metodologia() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} id="metodologia" className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <DiamondBg className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[800px] opacity-50" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-12">
              METODOLOGIA<br />SETTE IA
            </h2>
            <img src={asset('/images/metodologia-steps.svg')} alt="Metodologia: Identificar, Construir, Escalar" className="gsap-img max-w-sm w-full" />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={asset('/images/logo.svg')} alt="" aria-hidden="true" className="w-64 h-auto opacity-10" />
          </div>
        </div>
        <p className="gsap-fade font-mono text-xs tracking-[4px] uppercase text-white/40 mt-20">SETTE IA ® 2026</p>
      </div>
    </section>
  );
}
