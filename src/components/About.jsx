import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-element', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Typographic Story Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="about-element font-medium tracking-widest uppercase text-soft-pink text-xs relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-[1px] before:bg-soft-pink">
              Nasza historia
            </span>
            <h2 className="about-element font-serif text-4xl md:text-5xl lg:text-6xl text-deep-ink leading-tight font-medium">
              Pasja <br/> do doskonałości
            </h2>
          </div>

          <p className="about-element text-lg md:text-xl text-deep-ink/80 leading-relaxed font-light">
            „Revela – Piekarczyk to oryginalny producent cakepopsów w Polsce.
            Od 2019 roku dostarczamy ręcznie robione cakepopsy, których receptura jest owocem współpracy z wieloma wspaniałymi cukiernikami oraz naszej pasji do doskonałości.”
          </p>
          
          <div className="about-element flex flex-wrap gap-4 mt-4">
            <div className="px-5 py-3 rounded-2xl bg-white shadow-sm border border-blush/50 text-deep-ink text-sm font-medium">
              Od 2019 roku
            </div>
            <div className="px-5 py-3 rounded-2xl bg-white shadow-sm border border-blush/50 text-deep-ink text-sm font-medium">
              Ręczna produkcja
            </div>
            <div className="px-5 py-3 rounded-2xl bg-white shadow-sm border border-blush/50 text-deep-ink text-sm font-medium">
              Logistyka w całej Polsce
            </div>
          </div>
        </div>

        {/* Image / Aesthetic Column */}
        <div className="w-full lg:w-1/2 about-element flex items-center justify-center py-8">
          <div className="relative aspect-[1.25/1] w-full max-w-md mx-auto rounded-[50%] bg-white overflow-hidden shadow-2xl border-[8px] border-white z-10">
            <img 
              src="/Piekarczyk_Logo.jpg" 
              alt="Logo Piekarczyk" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Small decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-pink/10 rounded-full blur-2xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
