import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage on mount to see if user has already accepted
    const hasConsented = localStorage.getItem('cookie_consent_cakepops');
    if (!hasConsented) {
      // Delay showing the banner slightly for better entry UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo('.cookie-banner', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [isVisible]);

  const handleAccept = () => {
    gsap.to('.cookie-banner', { 
      y: 100, 
      opacity: 0, 
      duration: 0.5, 
      ease: 'power3.in',
      onComplete: () => {
        localStorage.setItem('cookie_consent_cakepops', 'true');
        setIsVisible(false);
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[900px] pointer-events-auto">
      <div className="bg-white/95 backdrop-blur-md border border-white/50 shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Soft decorative blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-soft-pink/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex gap-4 items-start md:items-center relative z-10 w-full md:w-auto flex-1">
          <div className="w-12 h-12 rounded-full bg-cream hidden sm:flex items-center justify-center text-soft-pink flex-shrink-0 shadow-sm border border-white">
            <Cookie size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-deep-ink font-serif font-bold text-lg mb-1">Dbamy o Twoją prywatność</h4>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Nasza strona używa plików polityki prywatności (tzw. cookies) w celu zapewnienia prawidłowego działania usług, celów analitycznych oraz poprawy doświadczenia użytkownika. Więcej informacji znajdziesz w naszej <a href="/polityka-prywatnosci" className="text-soft-pink hover:underline font-medium">Polityce Prywatności</a>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto relative z-10">
          <button 
            onClick={handleAccept}
            className="w-full md:w-auto bg-deep-ink text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-soft-pink transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
