import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stars = (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    text: 'Em 2 semanas, nosso tempo de resposta ao cliente caiu de 4 horas para 12 segundos. A equipe finalmente foca no que importa.',
    name: 'Ricardo Mendes',
    role: 'CEO, TechFlow',
    color: 'bg-blue',
  },
  {
    text: 'Os agentes da Sette IA não parecem robôs. Nossos clientes elogiam o atendimento sem saber que é IA.',
    name: 'Camila Ferreira',
    role: 'Diretora de CX, Nova Saúde',
    color: 'bg-emerald-500',
  },
  {
    text: 'Triplicamos a qualificação de leads sem contratar ninguém. O ROI se pagou no primeiro mês.',
    name: 'André Oliveira',
    role: 'Head de Vendas, CrediFácil',
    color: 'bg-violet-500',
  },
  {
    text: 'Do diagnóstico ao go-live foram apenas 3 semanas. Suporte impecável durante todo o processo.',
    name: 'Juliana Costa',
    role: 'COO, Logex Transportes',
    color: 'bg-amber-500',
  },
  {
    text: 'Automatizamos 80% do onboarding. O que levava 5 dias agora acontece em horas, com zero erros.',
    name: 'Felipe Duarte',
    role: 'Founder, EduTech Brasil',
    color: 'bg-rose-500',
  },
];

// Final scattered positions (percentage-based) — like Floria's staggered layout
// [left%, top in px] for each card
const positions = [
  { left: '2%', top: 0 },       // top-left
  { left: '35%', top: 30 },     // top-center (slightly lower)
  { left: '67%', top: 60 },     // top-right (more lower)
  { left: '15%', top: 310 },    // bottom-left-center
  { left: '52%', top: 350 },    // bottom-right-center (lower)
];

export function Condicoes() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo('.avaliacoes-title', { opacity: 0, y: 35 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.avaliacoes-title', start: 'top 75%', end: 'top 45%', scrub: 1 },
      });

      const cards = wrap.querySelectorAll<HTMLElement>('.aval-card');
      const wrapRect = wrap.getBoundingClientRect();
      const centerX = wrapRect.width / 2;
      const centerY = wrapRect.height / 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'top 10%',
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect();
        const cardCX = cardRect.left - wrapRect.left + cardRect.width / 2;
        const cardCY = cardRect.top - wrapRect.top + cardRect.height / 2;

        // Offset to bring card to the center of the wrapper
        const dx = centerX - cardCX;
        const dy = centerY - cardCY;

        // Start: all cards stacked at center, invisible, small
        // Cards at the back have slightly different z-index order
        gsap.set(card, { zIndex: cards.length - i });

        tl.fromTo(card,
          {
            x: dx,
            y: dy,
            scale: 0.3,
            opacity: 0,
            rotation: -8 + i * 4, // slight fanned rotation when stacked
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out',
          },
          i * 0.18 // each card peels off one after another
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="avaliacoes-title font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase text-center mb-20">
          O QUE NOSSOS<br />CLIENTES DIZEM
        </h2>

        {/* Desktop: scattered layout */}
        <div ref={wrapRef} className="relative hidden sm:block" style={{ minHeight: '620px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="aval-card absolute w-[31%]"
              style={{ left: positions[i].left, top: positions[i].top }}
            >
              <Card t={t} />
            </div>
          ))}
        </div>

        {/* Mobile: simple stack */}
        <div className="flex flex-col gap-5 sm:hidden">
          {testimonials.map((t, i) => (
            <div key={i}>
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-7 sm:p-8 hover:bg-white/[0.06] hover:border-blue/20 transition-all duration-300 backdrop-blur-sm">
      {stars}
      <p className="font-mono text-sm leading-relaxed text-white/70 mb-6">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-heading text-sm font-bold shrink-0`}>
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-sm font-bold text-white">{t.name}</p>
          <p className="font-mono text-xs text-white/30">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
