import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
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
  const [splashDone, setSplashDone] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  const handleSplashComplete = () => {
    setSplashDone(true);
    // 1 second delay before Hero animations start
    setTimeout(() => setHeroReady(true), 1000);
  };

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <Hero animate={heroReady} />
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
