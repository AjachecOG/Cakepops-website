import React, { useEffect } from 'react';

const LegalPage = ({ title, date, content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-deep-ink bg-cream pb-24">
      <div className="noise-overlay" />
      
      <main className="max-w-4xl mx-auto pt-32 px-6 md:px-12 relative z-10">
        <a href="/" className="inline-flex items-center text-sm font-medium text-warm-gray hover:text-soft-pink transition-colors mb-10 group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Wróć do strony głównej
        </a>

        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-white/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blush/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-soft-pink font-medium text-sm tracking-widest uppercase mb-4 block">
              Zaktualizowano: {date}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-ink font-bold mb-12">
              {title}
            </h1>
            
            <div className="prose prose-lg prose-pink max-w-none text-deep-ink/80 font-light leading-relaxed">
              {content}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
