import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: targetId, offsetY: 80 },
      ease: "power3.inOut"
    });
    window.history.pushState(null, '', targetId);
  };
  return (
    <footer className="bg-deep-ink text-white/90 pt-16 pb-8 px-6 md:px-12 w-full mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/10 pb-12 mb-8">
        <div className="flex flex-col gap-4">
          <span className="font-serif font-bold tracking-widest text-2xl text-white">
            CAKEPOPS.PL
          </span>
          <p className="text-white/60 text-sm max-w-sm">
            Oryginalny producent ręcznie robionych cakepopsów w Polsce. Luksusowy smak, elegancka forma, doskonały biznes.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-soft-pink transition-colors">O nas</a>
            <a href="#why-us" onClick={(e) => handleSmoothScroll(e, '#why-us')} className="hover:text-soft-pink transition-colors">Dlaczego my</a>
            <a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')} className="hover:text-soft-pink transition-colors">Galeria</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-soft-pink transition-colors">Kontakt</a>
          </div>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="text-soft-pink hover:text-white transition-colors text-sm font-medium border-b border-soft-pink/30 hover:border-white w-max pb-1"
          >
            Napisz do nas
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
        <span>&copy; {new Date().getFullYear()} Revela Sp. z o.o. Wszelkie prawa zastrzeżone.</span>
        <div className="flex items-center gap-6">
          <a href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności (RODO)</a>
          <a href="/regulamin" className="hover:text-white transition-colors">Regulamin sklepu</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
