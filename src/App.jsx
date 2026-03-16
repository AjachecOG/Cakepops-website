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

  return (
    <div className="min-h-screen relative font-sans text-deep-ink bg-cream overflow-x-hidden">
      <div className="noise-overlay" />
      
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
