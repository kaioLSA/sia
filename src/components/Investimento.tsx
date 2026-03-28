import { DiamondBg } from './DiamondBg';
import { useGsapReveal } from '../hooks/useGsapReveal';

export function Investimento() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} id="investimento" className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <DiamondBg className="absolute top-1/2 right-[-300px] -translate-y-1/2 w-[800px] opacity-50" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-12">
          INVESTIMENTO
        </h2>
        <img src="/images/investimento-details.svg" alt="Setup inicial R$5.000 + Mensalidade R$2.000" className="gsap-img max-w-[450px] w-full mb-16" />
        <p className="gsap-fade font-heading text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug text-white/50 max-w-[700px]">
          Quanto custaria contratar uma equipe humana equivalente versus o investimento na Sette IA?
        </p>
      </div>
    </section>
  );
}
