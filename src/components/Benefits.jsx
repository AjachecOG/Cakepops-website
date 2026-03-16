import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TrendingUp, ShoppingBag, Gift, Truck } from 'lucide-react';

const Benefits = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Header reveal
        gsap.from('.benefits-header', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          y: 20, opacity: 0, duration: 0.8, ease: 'power3.out'
        });

        // Cards stagger reveal
        gsap.from('.benefit-card', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
          y: 30, opacity: 0, scale: 0.98, duration: 0.8, stagger: 0.15, ease: 'power3.out'
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from('.benefits-header', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
          y: 10, opacity: 0, duration: 0.6, ease: 'power3.out'
        });

        gsap.from('.benefit-card', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          y: 15, opacity: 0, scale: 1, duration: 0.6, ease: 'power3.out' // No stagger on mobile
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="text-soft-pink mb-4" size={40} strokeWidth={1.5} />,
      title: "Wysoka marża handlowa",
      desc: "Dzięki wysokiej marży łatwo zwiększysz zysk! To gotowy i lubiany produkt, który natychmiast pracuje na Twój wynik."
    },
    {
      icon: <ShoppingBag className="text-soft-pink mb-4" size={40} strokeWidth={1.5} />,
      title: "Poszerzenie asortymentu",
      desc: "Szybki sposób na wzbogacenie oferty o prestiżowy deser bez konieczności zatrudniania dodatkowych cukierników."
    },
    {
      icon: <Gift className="text-soft-pink mb-4" size={40} strokeWidth={1.5} />,
      title: "Dodatkowa sprzedaż",
      desc: "Imprezy firmowe, wesela, urodziny i inne wydarzenia to idealna okazja do sprzedaży naszych cakepopsów w większych pakietach."
    },
    {
      icon: <Truck className="text-soft-pink mb-4" size={40} strokeWidth={1.5} />,
      title: "Szybka i bezpieczna logistyka",
      desc: "Zapewniamy zoptymalizowane i pewne dostawy w całej Polsce, by produkt zawsze dotarł na miejsce w idealnym, luksusowym stanie."
    }
  ];

  return (
    <section id="benefits" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-blush/30">
      <div className="max-w-6xl mx-auto">
        
        <div className="benefits-header text-center mb-16">
          <span className="font-medium tracking-widest uppercase text-soft-pink text-xs mb-4 block">
            Partnerstwo biznesowe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-ink leading-tight font-medium">
            Wzbogać swój biznes
          </h2>
        </div>

        {/* Improved grid layout ensuring absolute visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 opacity-100 relative z-10">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="benefit-card bg-white p-10 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-white/50 flex flex-col group items-start"
              style={{ opacity: 1, transform: 'none' }} // Ensure visible fallback if GSAP fails
            >
              <div className="bg-blush/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-3xl font-bold text-deep-ink mb-4 group-hover:text-soft-pink transition-colors">
                {benefit.title}
              </h3>
              <p className="text-warm-gray leading-relaxed font-light text-base">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
