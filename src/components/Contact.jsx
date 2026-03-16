import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-element', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const emailAddress = "biuro@cakepops.pl";
  const emailSubject = "Prośba o ofertę CAKEPOPS";
  const emailBody = `Dzień dobry,

Zwracam się z prośbą o przygotowanie oferty na cakepopsy.
Poniżej przesyłam wstępne szczegóły:

1. Nazwa firmy / Imię i nazwisko: 
2. Rodzaj współpracy (np. kawiarnia, jednorazowy event, wesele): 
3. Szacowana ilość sztuk: 
4. Preferowany termin realizacji / dostawy: 
5. Numer telefonu do kontaktu: 

Będę wdzięczny/a za kontakt i przesłanie oferty z cennikiem.

Pozdrawiam,
[Twoje Imię]`;

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-4xl mx-auto rounded-[3rem] bg-blush p-10 md:p-16 text-center border border-white shadow-lg relative overflow-hidden">
        
        {/* Soft abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="contact-element w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-soft-pink">
            <Mail size={28} strokeWidth={1.5} />
          </div>

          <h2 className="contact-element font-serif text-4xl md:text-5xl lg:text-6xl text-deep-ink leading-tight font-medium mb-6">
            Porozmawiajmy <br/> <span className="italic text-soft-pink">o detalach</span>
          </h2>
          
          <p className="contact-element text-deep-ink/70 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
            Oferta handlowa oraz wyceny indywidualne wysyłamy drogą mailową. Skontaktuj się z nami bezpośrednio, by otrzymać pełen cennik i katalog smaków.
          </p>

          <div className="contact-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a 
              href={mailtoLink}
              className="group bg-deep-ink text-white px-8 py-4 rounded-full font-medium hover:bg-soft-pink transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Poproś o ofertę
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={`mailto:${emailAddress}`}
              className="bg-white text-deep-ink border border-deep-ink/10 px-8 py-4 rounded-full font-medium hover:bg-cream hover:border-deep-ink/20 transition-all duration-300 text-center"
            >
              Napisz do nas
            </a>
          </div>

          <p className="contact-element mt-10 text-sm font-medium text-warm-gray tracking-wide">
            Możesz też napisać prosto na: <span className="text-deep-ink font-semibold ml-1">biuro@cakepops.pl</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
