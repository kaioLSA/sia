import { useGsapReveal } from '../hooks/useGsapReveal';
import { asset } from '../utils/asset';

export function Entregaveis() {
  const ref = useGsapReveal();

  return (
    <section ref={ref} className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-2px] leading-tight text-white uppercase mb-12">
          ENTREGÁVEIS<br />DO PROJETO
        </h2>
        <img src={asset('/images/entregaveis.svg')} alt="Entregáveis do projeto" className="gsap-img max-w-[520px] w-full mb-16" />
        <h3 className="font-heading text-2xl font-bold text-white mb-6">O QUE NÃO ESTÁ INCLUSO</h3>
        <img src={asset('/images/nao-incluso.svg')} alt="O que não está incluso" className="gsap-img max-w-[520px] w-full" />
      </div>
    </section>
  );
}
