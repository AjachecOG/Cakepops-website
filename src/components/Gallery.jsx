import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from('.gallery-header', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          y: 20, opacity: 0, duration: 0.8, ease: 'power3.out'
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from('.gallery-header', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
          y: 10, opacity: 0, duration: 0.6, ease: 'power3.out'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const images = [
    "/user_cakepop_1.png",
    "/cakepop_1.png",
    "/user_cakepop_3.png",
    "/cakepop_4.png"
  ];

  const marqueeStyle = `
    @keyframes scroll-x {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-50% - 12px)); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: scroll-x 25s linear infinite;
      will-change: transform;
    }
  `;

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-cream overflow-hidden">
      <style>{marqueeStyle}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="gallery-header text-center">
          <span className="font-medium tracking-widest uppercase text-soft-pink text-xs mb-4 block">
            Galeria
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-deep-ink leading-tight font-bold">
            Sztuka <span className="italic text-soft-pink">cukiernicza</span> na żywo
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto mt-6 font-light">
            Słodycz pasująca do każdego słodkiego stołu, eventu i czy sklepowej witryny. Zobacz naszą taśmę smaków.
          </p>
        </div>
      </div>

      <div className="gallery-container relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-6 px-3">
          {/* Double array for seamless loop */}
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] flex-shrink-0 overflow-hidden rounded-[2rem] bg-blush group shadow-sm border border-white/50"
            >
              <img
                src={src}
                alt="Wizualizacja cakepops premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-center justify-center">
        <span className="text-sm text-warm-gray font-medium mb-4 uppercase tracking-widest text-center">Zobacz co tracisz</span>
        <a 
          href="#benefits"
          onClick={(e) => {
            e.preventDefault();
            gsap.to(window, { duration: 1.2, scrollTo: { y: '#benefits', offsetY: 80 }, ease: "power3.inOut" });
            window.history.pushState(null, '', '#benefits');
          }}
          className="w-14 h-14 rounded-full bg-white shadow-md border border-blush flex items-center justify-center text-soft-pink hover:bg-soft-pink hover:text-white transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>

    </section>
  );
};

export default Gallery;
