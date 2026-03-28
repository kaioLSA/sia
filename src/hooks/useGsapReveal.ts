import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrubTrigger = (trigger: HTMLElement) => ({
  trigger,
  start: 'top 75%',
  end: 'top 40%',
  scrub: 1,
});

export function useGsapReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Titles
      el.querySelectorAll<HTMLElement>('h2, h3').forEach((title) => {
        gsap.fromTo(title,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: scrubTrigger(title),
          }
        );
      });

      // Paragraphs and labels
      el.querySelectorAll<HTMLElement>('.gsap-fade').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: scrubTrigger(item),
          }
        );
      });

      // Images
      el.querySelectorAll<HTMLElement>('.gsap-img').forEach((img) => {
        gsap.fromTo(img,
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out',
            scrollTrigger: scrubTrigger(img),
          }
        );
      });

      // Stagger children (cards, grid items)
      el.querySelectorAll<HTMLElement>('.gsap-stagger').forEach((parent) => {
        gsap.fromTo(Array.from(parent.children),
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { ...scrubTrigger(parent), end: 'top 25%' },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
