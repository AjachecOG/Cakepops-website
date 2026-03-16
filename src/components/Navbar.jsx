import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background and border transition on scroll
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onUpdate: (self) => {
          if (self.progress > 0 && navRef.current) {
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              duration: 0.3,
            });
          } else if (navRef.current) {
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: 'none',
              duration: 0.3,
            });
          }
        }
      });
      
      // Select all sections to track active state
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(section.id);
            }
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    
    // Użyto GSAP ScrollTo dla w pełni kontrolowanego, miękkiego przewijania
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: targetId, offsetY: 80 },
      ease: "power3.inOut"
    });
    
    // Update URL hash without jumping
    window.history.pushState(null, '', targetId);
    setActiveSection(targetId.substring(1));
  };

  const navLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Dlaczego my', href: '#why-us' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Korzyści', href: '#benefits' },
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 transition-colors duration-300 ease-in-out w-[90%] max-w-[800px] flex items-center justify-between pointer-events-auto border border-transparent backdrop-blur-md"
    >
      <a href="#" className="font-serif font-bold tracking-widest text-lg md:text-xl text-deep-ink hover:opacity-80 transition-opacity">
        CAKEPOPS.PL
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={`text-sm font-medium tracking-wide transition-all duration-300 ${
              activeSection === link.href.substring(1) 
                ? 'text-soft-pink' 
                : 'text-deep-ink/70 hover:text-deep-ink hover:-translate-y-0.5'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <a 
        href="#contact" 
        onClick={(e) => handleSmoothScroll(e, '#contact')}
        className="bg-deep-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-soft-pink transition-colors duration-300 shadow-sm hover:shadow-md active:scale-95 flex-shrink-0"
      >
        Napisz do nas
      </a>
    </nav>
  );
};

export default Navbar;
