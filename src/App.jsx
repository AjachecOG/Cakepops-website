import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Comparison from './components/Comparison';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dziekuje from './components/Dziekuje';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/dziekuje') {
    return <Dziekuje />;
  }

  if (currentPath === '/polityka-prywatnosci') {
    return (
      <LegalPage 
        title="Polityka Prywatności" 
        date="16 marca 2026" 
        content={<p>W przygotowaniu. Tutaj znajdą się pełne informacje dotyczące ochrony danych osobowych, administratora danych, plików cookies oraz praw użytkownika związanych z RODO.</p>} 
      />
    );
  }

  if (currentPath === '/regulamin') {
    return (
      <LegalPage 
        title="Regulamin Sklepu" 
        date="16 marca 2026" 
        content={<p>W przygotowaniu. Tutaj znajdą się warunki świadczenia usług drogą elektroniczną, zasady sprzedaży B2B oraz B2C, polityka zwrotów i informacje o podmiocie realizującym zamówienia.</p>} 
      />
    );
  }

  return (
    <div className="min-h-screen relative font-sans text-deep-ink bg-cream overflow-x-hidden">
      <div className="noise-overlay" />
      
      <CookieBanner />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Comparison />
        <Gallery />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
