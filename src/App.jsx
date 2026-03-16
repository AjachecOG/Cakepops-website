import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Comparison from './components/Comparison';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dziekuje from './components/Dziekuje';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const PrivacyPolicyContent = () => (
    <div className="space-y-6">
      <h2>1. Administrator Danych</h2>
      <p>Administratorem Twoich danych osobowych jest <strong>Revela Sp. z o.o.</strong> z siedzibą w Polsce. W sprawach związanych z przetwarzaniem danych można kontaktować się poprzez adres e-mail: biuro@cakepops.pl.</p>
      
      <h2>2. Cele przetwarzania</h2>
      <p>Przetwarzamy Twoje dane osobowe w celu obsługi zapytań wysłanych przez formularz kontaktowy, przygotowania oferty handlowej oraz realizacji i logistyki zamówień B2B oraz B2C.</p>
      
      <h2>3. Pliki Cookies</h2>
      <p>Strona cakepops.pl wykorzystuje pliki cookies (tzw. ciasteczka) niezbędne do jej prawidłowego działania, celów bezpieczeństwa oraz analitycznych. Korzystając ze strony, zgadzasz się na ich użycie zgodnie z ustawieniami Twojej przeglądarki. W każdej chwili możesz zablokować pliki cookies w ustawieniach przeglądarki.</p>

      <h2>4. Twoje Prawa</h2>
      <p>Zgodnie z przepisami RODO masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania i przenoszenia danych.</p>
    </div>
  );

  const TermsContent = () => (
    <div className="space-y-6">
      <h2>1. Postanowienia ogólne</h2>
      <p>Właścicielem serwisu oraz producentem sprzedawcą produktów marki CAKEPOPS.PL jest <strong>Revela Sp. z o.o.</strong> Niniejszy regulamin określa zasady świadczenia usług drogą elektroniczną oraz warunki sprzedaży hurtowej (B2B) i detalicznej (B2C).</p>
      
      <h2>2. Zamówienia i płatności</h2>
      <p>Zamówienia realizowane są na podstawie indywidualnej wyceny przesłanej po wypełnieniu formularza ofertowego. Szczegóły dotyczące końcowych cen, minimalnej wielkości zamówienia oraz terminów płatności ustalane są indywidualnie z klientem drogą mailową.</p>
      
      <h2>3. Realizacja i logistyka</h2>
      <p>Dostawy realizujemy na terenie całej Polski za pośrednictwem współpracujących przewoźników kurierskich lub transportem własnym, dbając o najwyższe bezpieczeństwo i świeżość naszych produktów cukierniczych.</p>
      
      <h2>4. Reklamacje i zwroty</h2>
      <p>Ze względu na specyfikę oferowanych produktów (wyroby cukiernicze o określonym terminie przydatności), tradycyjne zwroty bez podania przyczyny nie są przyjmowane (zgodnie z art. 38 ustawy o prawach konsumenta). W przypadku ewentualnych uszkodzeń transportowych, reklamacje rozpatrujemy indywidualnie na korzyść klienta w terminie 14 dni od zgłoszenia.</p>
    </div>
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/dziekuje') {
    return <Dziekuje />;
  }

  if (currentPath === '/polityka-prywatnosci') {
    return (
      <LegalPage 
        title="Polityka Prywatności" 
        date="16 marca 2026" 
        content={<PrivacyPolicyContent />} 
      />
    );
  }

  if (currentPath === '/regulamin') {
    return (
      <LegalPage 
        title="Regulamin Sklepu" 
        date="16 marca 2026" 
        content={<TermsContent />} 
      />
    );
  }

  return (
    <div className="min-h-screen relative font-sans text-deep-ink bg-cream overflow-x-hidden">
      <div className="noise-overlay" />
      
      <CookieBanner />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Comparison />
        <Gallery />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
