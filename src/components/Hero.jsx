import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop: Staggered reveal
        gsap.from('.hero-element', {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2
        });
        
        gsap.fromTo('.hero-image', 
          { scale: 1.05, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
        );
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile: Simplified, no stagger, smaller y offset
        gsap.from('.hero-element', {
          y: 15,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1
        });
        
        gsap.fromTo('.hero-image', 
          { scale: 1, opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

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
    <section 
      id="top" 
      ref={containerRef} 
      className="relative min-h-[95vh] md:min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden rounded-b-[2.5rem] bg-blush bg-opacity-30"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        <div className="flex flex-col items-start justify-center">
          <span className="hero-element inline-block py-1.5 px-4 rounded-full bg-white/60 text-soft-pink text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm border border-white/40">
            Oryginalny producent w Polsce
          </span>
          
          <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-deep-ink leading-[1.1] mb-6">
            Elegancka forma, <br />
            <span className="text-soft-pink italic font-normal">prawdziwy smak.</span>
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-warm-gray mb-10 max-w-lg leading-relaxed font-light">
            Ręcznie robione cakepopsy w estetyce premium. Luksusowy dodatek dla
            Twojego biznesu z najwyższą dbałością o detal i opłacalność.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-deep-ink text-white px-8 py-4 rounded-full font-medium hover:bg-soft-pink transition-colors duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Napisz do nas
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => handleSmoothScroll(e, '#gallery')}
              className="bg-white text-deep-ink border border-deep-ink/10 px-8 py-4 rounded-full font-medium hover:bg-cream hover:border-deep-ink/20 transition-colors duration-300 text-center"
            >
              Zobacz ofertę
            </a>
          </div>
        </div>

        <div className="relative h-[50vh] lg:h-[70vh] w-full hero-image flex items-center justify-center p-8">
            <img 
              src="/hero_cakepop.png" 
              alt="Cakepops z kolorową posypką" 
              className="w-full h-full object-contain object-bottom drop-shadow-[0_30px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-500 hover:-translate-y-4"
              loading="eager"
            />
        </div>
      </div>

    </section>
  );
};

export default Hero;
