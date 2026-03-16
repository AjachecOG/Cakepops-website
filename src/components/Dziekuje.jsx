import React from 'react';

const Dziekuje = () => {
  return (
    <div className="min-h-screen relative font-sans text-deep-ink bg-cream overflow-hidden flex flex-col">
      <div className="noise-overlay" />
      
      <main className="flex-grow flex items-center justify-center py-24 px-6 md:px-12">
        <div className="max-w-xl w-full mx-auto rounded-[3rem] bg-blush p-12 md:p-16 text-center border border-white shadow-lg relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-serif text-5xl md:text-6xl text-deep-ink leading-tight font-medium mb-6">
              Dziękujemy za <br/> <span className="italic text-soft-pink">wiadomość</span>
            </h1>
            
            <p className="text-deep-ink/70 text-lg mx-auto mb-10 font-light">
              Nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe, aby przedstawić pełną ofertę CAKEPOPS.PL.
            </p>

            <a 
              href="/"
              className="bg-deep-ink text-white px-8 py-4 rounded-full font-medium hover:bg-soft-pink transition-colors duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
            >
              Wróć do strony głównej
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dziekuje;
