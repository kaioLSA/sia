import { useGsapReveal } from '../hooks/useGsapReveal';

const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Mapeamos os processos e identificamos onde a IA terá maior impacto.' },
  { num: '02', title: 'Desenvolvimento', desc: 'Construímos os agentes sob medida com as melhores tecnologias.' },
  { num: '03', title: 'Implementação', desc: 'Integramos os agentes aos seus sistemas e fluxos existentes.' },
  { num: '04', title: 'Otimização', desc: 'Monitoramos, ajustamos e evoluímos os agentes continuamente.' },
];

export function ComoFunciona() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <img src="/images/como-funciona-bg.svg" alt="" aria-hidden="true" className="absolute top-0 right-0 w-[60%] h-full object-cover opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-4">
          COMO FUNCIONA<br />NA PRÁTICA
        </h2>
        <p className="gsap-fade font-mono text-sm sm:text-base leading-relaxed text-white/50 max-w-xl mb-16">
          Entregamos uma solução completa, do diagnóstico à implementação,
          com acompanhamento contínuo para garantir resultados reais.
        </p>
        <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative pt-8 border-t-2 border-white/[0.08]">
              <div className="absolute top-[-2px] left-0 w-10 h-0.5 bg-blue" />
              <span className="font-heading text-5xl font-extrabold text-blue/20 leading-none block mb-4">{step.num}</span>
              <h3 className="font-heading text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="font-mono text-sm leading-relaxed text-white/40">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
