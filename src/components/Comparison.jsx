import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, Minus, Maximize, Scale, Utensils, TrendingUp } from 'lucide-react';

const Comparison = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.comparison-header', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out'
      });

      // Rows reveal
      gsap.from('.comparison-row', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      category: "ROZMIAR",
      icon: <Maximize size={16} className="text-soft-pink mr-2" />,
      us: "Średnica ok. 3,5 cm",
      them: "ok. 2,5–3 cm"
    },
    {
      category: "WAGA",
      icon: <Scale size={16} className="text-soft-pink mr-2" />,
      us: "Waży 35–38 gramów",
      them: "25–30 gramów"
    },
    {
      category: "SMAK",
      icon: <Utensils size={16} className="text-soft-pink mr-2" />,
      us: "Ogromna ilość smaków do wyboru — intensywne i prawdziwe smaki",
      them: "Często mały wybór, sztuczne i mało wyraziste smaki"
    },
    {
      category: "ZYSK I LOGISTYKA",
      icon: <TrendingUp size={16} className="text-soft-pink mr-2" />,
      us: "Wysoka marża handlowa, szybki i bezpieczny dowóz w całej Polsce",
      them: "Często niższy potencjał marży i mniej przewidywalna logistyka"
    }
  ];

  return (
    <section id="why-us" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden rounded-[2.5rem] my-8 shadow-sm max-w-[95%] mx-auto">
      {/* Background radial gradient for premium softness */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blush/50 via-white to-white rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        
        <div className="comparison-header text-center mb-20">
          <span className="font-medium tracking-widest uppercase text-soft-pink text-xs mb-4 block">
            Bezkonkurencyjna jakość
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-deep-ink leading-tight font-bold max-w-4xl mx-auto">
            Dlaczego nasze produkty są <br/>
            <span className="italic text-soft-pink">najlepsze na rynku?</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Table Headers */}
          <div className="hidden md:flex justify-between items-end px-8 pb-4 border-b border-blush">
            <div className="w-1/4"></div>
            <div className="w-[35%] text-center font-serif text-2xl font-semibold text-deep-ink">
              CAKEPOPS.PL
            </div>
            <div className="w-[35%] text-center font-serif text-xl font-medium text-warm-gray">
              KONKURENCJA
            </div>
          </div>

          {/* Table Rows */}
          {features.map((feature, idx) => (
            <div key={idx} className="comparison-row relative flex flex-col md:flex-row items-center gap-4 md:gap-0 bg-cream/30 md:bg-transparent rounded-3xl md:rounded-none p-6 md:p-0 border border-blush md:border-none">
              
              {/* Category */}
              <div className="w-full md:w-1/4 flex justify-center md:justify-start pb-4 md:pb-0 border-b border-blush/50 md:border-none">
                <span className="flex items-center px-4 py-2 rounded-full bg-deep-ink/5 text-deep-ink/80 text-xs font-semibold tracking-wider font-sans shadow-sm border border-white/40">
                  {feature.icon}
                  {feature.category}
                </span>
              </div>

              <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:w-[75%] items-stretch">
                
                {/* Us (Left side visually highlighted) */}
                <div className="w-full md:w-1/2 flex relative z-10">
                  <div className="bg-blush/60 flex-1 rounded-2xl md:rounded-l-3xl p-6 md:p-8 flex items-center justify-center text-center border border-white shadow-sm md:mr-2">
                    <Check className="text-soft-pink -mt-1 mr-3 flex-shrink-0" size={20} strokeWidth={2.5} />
                    <p className="font-medium text-deep-ink text-[15px] md:text-base leading-snug">
                      {feature.us}
                    </p>
                  </div>
                </div>

                {/* Them (Right side muted) */}
                <div className="w-full md:w-1/2 flex">
                  <div className="bg-white flex-1 rounded-2xl md:rounded-r-3xl p-6 md:p-8 flex items-center justify-center text-center border border-warm-gray/10 group-hover:border-warm-gray/20 transition-colors md:ml-2">
                    <Minus className="text-warm-gray/50 -mt-1 mr-3 flex-shrink-0" size={20} strokeWidth={2} />
                    <p className="text-warm-gray text-sm md:text-[15px] leading-snug font-light">
                      {feature.them}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Comparison;
