import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlight } from './components/Highlight';
import { Diagnostico } from './components/Diagnostico';
import { Oportunidade } from './components/Oportunidade';
import { Metodologia } from './components/Metodologia';
import { Servicos } from './components/Servicos';
import { ComoFunciona } from './components/ComoFunciona';
import { Entregaveis } from './components/Entregaveis';
import { Investimento } from './components/Investimento';
import { Condicoes } from './components/Condicoes';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
      <Diagnostico />
      <Oportunidade />
      <Metodologia />
      <Servicos />
      <ComoFunciona />
      <Entregaveis />
      <Investimento />
      <Condicoes />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
