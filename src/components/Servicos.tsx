import { useGsapReveal } from '../hooks/useGsapReveal';

const services = [
  {
    title: 'Atendimento ao Cliente',
    description: 'Agentes que respondem de forma humanizada, 24 horas por dia, sem filas de espera.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Vendas & Prospecção',
    description: 'Automatize a qualificação de leads e acelere o ciclo de vendas com IA.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e foque no que realmente importa para o crescimento.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Treinamento & Onboarding',
    description: 'Agentes que treinam equipes, respondem dúvidas e aceleram a curva de aprendizado.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export function Servicos() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} id="servicos" className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <img src="/images/agentes-img.svg" alt="" aria-hidden="true" className="absolute top-0 right-0 w-[50%] h-full object-cover opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-4">
          AGENTES<br />ESPECIALIZADOS
        </h2>
        <p className="gsap-fade font-mono text-sm sm:text-base leading-relaxed text-white/50 max-w-xl mb-16">
          Nossos agentes são projetados sob medida para cada área da sua empresa.
          Eles aprendem, evoluem e se adaptam ao seu negócio continuamente.
        </p>
        <div className="gsap-stagger grid sm:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 sm:p-10 transition-all duration-300 hover:bg-white/[0.06] hover:border-blue/20 hover:-translate-y-1 backdrop-blur-sm">
              <div className="mb-6">{svc.icon}</div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="font-mono text-sm leading-relaxed text-white/40">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
