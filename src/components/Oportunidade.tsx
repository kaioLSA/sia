import { DiamondBg } from './DiamondBg';
import { useGsapReveal } from '../hooks/useGsapReveal';

export function Oportunidade() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} id="oportunidade" className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <DiamondBg className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[800px] opacity-50" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-12">
          A OPORTUNIDADE
        </h2>
        <img src="/images/comparison-table.svg" alt="Tabela comparativa: Humanos vs Agentes Sette IA" className="gsap-img max-w-[700px] w-full" />
        <p className="gsap-fade font-mono text-xs tracking-[4px] uppercase text-white/40 mt-20">SETTE IA ® 2026</p>
      </div>
    </section>
  );
}
