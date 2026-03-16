import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, ArrowRight, MessageSquare, X } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from('.contact-element', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from('.contact-element', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
          y: 15, opacity: 0, duration: 0.6, ease: 'power3.out'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isFormOpen && formRef.current) {
      gsap.fromTo(formRef.current, 
        { height: 0, opacity: 0 }, 
        { height: 'auto', opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [isFormOpen]);

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
            <button 
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="group bg-deep-ink text-white px-8 py-4 rounded-full font-medium hover:bg-soft-pink transition-colors duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              {isFormOpen ? (
                <>Zwiń <X size={18} /></>
              ) : (
                <>Napisz do nas <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
            
            <a 
              href={mailtoLink}
              className="bg-white text-deep-ink border border-deep-ink/10 px-8 py-4 rounded-full font-medium hover:bg-cream hover:border-deep-ink/20 transition-colors duration-300 text-center"
            >
              Poproś o e-mail z ofertą
            </a>
          </div>

          <p className="contact-element mt-10 text-sm font-medium text-warm-gray tracking-wide">
            Możesz też napisać prosto na: <span className="text-deep-ink font-semibold ml-1">biuro@cakepops.pl</span>
          </p>
        </div>
      </div>
      
      {/* Rozsuwany formularz kontaktowy Netlify */}
      <div 
        ref={formRef} 
        className={`max-w-2xl mx-auto overflow-hidden ${isFormOpen ? 'mt-8' : 'h-0'}`}
      >
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-md border border-warm-gray/10 relative">
          <h3 className="font-serif text-2xl font-semibold mb-6 text-deep-ink text-center">Wyślij nam wiadomość</h3>
          
          <form 
            name="kontakt-footer" 
            method="POST" 
            action="/dziekuje" 
            data-netlify="true"
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="kontakt-footer" />
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-deep-ink ml-2">Imię i nazwisko / Firma</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-5 py-3 rounded-full bg-cream border border-transparent focus:border-soft-pink/50 focus:ring-2 focus:ring-soft-pink/20 outline-none transition-all"
                placeholder="Jan Kowalski"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-deep-ink ml-2">Adres e-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-5 py-3 rounded-full bg-cream border border-transparent focus:border-soft-pink/50 focus:ring-2 focus:ring-soft-pink/20 outline-none transition-all"
                placeholder="jan@domena.pl"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-deep-ink ml-2">Wiadomość</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full px-5 py-4 rounded-3xl bg-cream border border-transparent focus:border-soft-pink/50 focus:ring-2 focus:ring-soft-pink/20 outline-none transition-all resize-none"
                placeholder="Napisz szczegóły swojego zapytania..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-4 bg-soft-pink text-white py-4 rounded-full font-medium hover:bg-deep-ink transition-colors duration-300 shadow-lg flex items-center justify-center gap-3 w-full"
            >
              Wyślij wiadomość
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
