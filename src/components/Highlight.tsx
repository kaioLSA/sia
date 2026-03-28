import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DiamondBg } from './DiamondBg';

gsap.registerPlugin(ScrollTrigger);

export function Highlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split each line's text into individual characters
      const line1Chars = line1Ref.current?.querySelectorAll('.char');
      const line2Chars = line2Ref.current?.querySelectorAll('.char');

      // Timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      // Line 1: characters reveal one by one
      if (line1Chars) {
        tl.fromTo(
          line1Chars,
          { opacity: 0.1, y: 20 },
          { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: 'power2.out' },
          0
        );
      }

      // Line 2: characters reveal with slight delay
      if (line2Chars) {
        tl.fromTo(
          line2Chars,
          { opacity: 0.1, y: 30 },
          { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: 'power2.out' },
          0.15
        );
      }

      // Label fade in
      tl.fromTo(
        labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        0.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitChars = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ willChange: 'transform, opacity' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative bg-[#f5f5f5] py-24 sm:py-32 overflow-hidden"
    >
      <DiamondBg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] opacity-10 invert" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div ref={line1Ref}>
          <p className="font-heading text-3xl sm:text-5xl lg:text-7xl font-light tracking-[-2px] leading-tight text-[#737373] uppercase">
            {splitChars('A Sette IA será o braço')}
          </p>
        </div>
        <div ref={line2Ref}>
          <p className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-2px] leading-tight text-black uppercase">
            {splitChars('de IA da sua empresa')}
          </p>
        </div>
        <p
          ref={labelRef}
          className="font-mono text-xs tracking-[4px] uppercase text-black/25 mt-20"
        >
          SETTE IA ® 2026
        </p>
      </div>
    </section>
  );
}
