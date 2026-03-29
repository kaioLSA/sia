import { asset } from '../utils/asset';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4 text-center sm:text-left">
        <img src={asset('/images/logo.svg')} alt="Sette IA" className="h-5 w-auto" />
        <span className="font-mono text-xs tracking-[4px] uppercase text-white/30">
          AGENTES INTELIGENTES E AUTOMAÇÃO
        </span>
        <span className="font-mono text-xs tracking-[2px] uppercase text-white/30">
          &copy; 2026 SETTE IA. TODOS OS DIREITOS RESERVADOS.
        </span>
      </div>
    </footer>
  );
}
