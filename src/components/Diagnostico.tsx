import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function TrendDownIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
function RepeatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 21H4.6c-.56 0-.84 0-.98-.11a.5.5 0 0 1-.22-.39C3.39 20.36 3.39 20.08 3.39 19.52V3" /><path d="M7 14l4-4 4 4 6-6" />
    </svg>
  );
}

const problems = [
  { icon: <ClockIcon />, title: 'Tempo de resposta lento', desc: 'Clientes esperando horas ou dias por uma resposta simples.', stat: '72%', statLabel: 'desistem após 5min sem resposta' },
  { icon: <DollarIcon />, title: 'Custos operacionais altos', desc: 'Equipes grandes para tarefas repetitivas que poderiam ser automatizadas.', stat: '3x', statLabel: 'mais caro que automação com IA' },
  { icon: <TrendDownIcon />, title: 'Leads perdidos diariamente', desc: 'Oportunidades de venda que escapam por falta de follow-up rápido.', stat: '40%', statLabel: 'dos leads nunca são contactados' },
  { icon: <RepeatIcon />, title: 'Processos manuais repetitivos', desc: 'Horas gastas em tarefas que não exigem decisão humana.', stat: '60%', statLabel: 'do tempo gasto em tarefas repetitivas' },
  { icon: <MoonIcon />, title: 'Sem atendimento fora do horário', desc: 'Sua empresa para quando o expediente acaba. Seus concorrentes não.', stat: '35%', statLabel: 'das vendas acontecem fora do horário' },
  { icon: <ChartIcon />, title: 'Falta de dados para decisão', desc: 'Decisões baseadas em achismo ao invés de dados estruturados.', stat: '0', statLabel: 'insights automáticos hoje' },
];

export function Diagnostico() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.diag-header', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.diag-header', start: 'top 75%', end: 'top 40%', scrub: 1 },
      });

      gsap.fromTo('.diag-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.diag-grid', start: 'top 75%', end: 'top 25%', scrub: 1 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="diag-header mb-16">
          <p className="font-mono text-xs tracking-[4px] uppercase text-blue mb-4">
            //DIAGNÓSTICO
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-4">
            O QUE ESTÁ TRAVANDO<br />SEU CRESCIMENTO?
          </h2>
          <p className="font-mono text-sm leading-relaxed text-white/40 max-w-lg">
            Identificamos os gargalos mais comuns em empresas que ainda não
            utilizam agentes de IA em suas operações.
          </p>
        </div>

        <div className="diag-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="diag-card group relative bg-white/[0.02] border border-white/[0.06] rounded-lg p-7 hover:bg-white/[0.05] hover:border-blue/20 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-right">
                <span className="font-heading text-2xl font-extrabold text-blue/70 leading-none">
                  {p.stat}
                </span>
              </div>
              <div className="mb-4 opacity-80">{p.icon}</div>
              <h3 className="font-heading text-base font-bold text-white mb-2 pr-12">{p.title}</h3>
              <p className="font-mono text-xs leading-relaxed text-white/35 mb-3">{p.desc}</p>
              <span className="font-mono text-[10px] tracking-wide uppercase text-blue/40">{p.statLabel}</span>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs tracking-[4px] uppercase text-white/40 mt-20">
          SETTE IA ® 2026
        </p>
      </div>
    </section>
  );
}
