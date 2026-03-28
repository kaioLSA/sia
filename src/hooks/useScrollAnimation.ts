import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Animate section titles
      gsap.utils.toArray<HTMLElement>('.gsap-title', el).forEach((title) => {
        gsap.fromTo(title,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Animate paragraphs/descriptions
      gsap.utils.toArray<HTMLElement>('.gsap-text', el).forEach((text) => {
        gsap.fromTo(text,
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Animate cards/items with stagger
      gsap.utils.toArray<HTMLElement>('.gsap-stagger-parent', el).forEach((parent) => {
        const children = parent.children;
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: parent, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Animate images
      gsap.utils.toArray<HTMLElement>('.gsap-image', el).forEach((img) => {
        gsap.fromTo(img,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: img, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
