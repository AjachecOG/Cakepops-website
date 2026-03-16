# Dziennik Rozwoju i Poprawek (CAKEPOPS.PL)

Ten dokument stanowi podsumowanie najważniejszych wyzwań, błędów architektonicznych oraz wdrożonych rozwiązań od momentu rozpoczęcia budowy strony w technologii **React (Vite) + Tailwind CSS + GSAP**.

---

## 1. Architektura Animacji i Problemy Wydajnościowe (Mobile)

**Problem:** Strona klatkowała, zacinała się i ładowała z ogromnym opóźnieniem podczas przewijania na urządzeniach mobilnych.
**Diagnoza:** Zbyt skomplikowane obliczenia dla procesorów telefonów. Nakładanie się silnika GSAP (JavaScript) z globalnymi klasami Tailwind CSS (`transition-all`).
**Rozwiązania:**
- **Eliminacja `transition-all`**: Zastąpiono globalne przejścia precyzyjnymi klasami (np. `transition-colors`, `transition-transform`). Zapobiegło to "walce" przeglądarki z GSAP o kontrolę nad elementami.
- **Akceleracja GPU (Hardware Acceleration)**: W pliku `index.css` dodano regułę `will-change: transform, opacity;` dla elementów animowanych, wymuszając na przeglądarce renderowanie ich przy użyciu karty graficznej telefonu.
- **GSAP `matchMedia()`**: Na telefonach wyłączono opóźnienia grupowe (`stagger`) wprowadzające setki węzłów do przeliczenia naraz. Zmniejszono również wektory przesunięć na osi Y. Na mniejszych ekranach animacje ładują się teraz prościej i szybciej (60 FPS), zachowując przy tym luksusowy, kaskadowy efekt na komputerach.

## 2. Płynne Przewijanie (Smooth Scroll) i Nawigacja

**Problem:** Standardowe kotwice HTML (np. `href="#about"`) skakały agresywnie, psując "miękkie" odczucie premium strony.
**Rozwiązania:**
- Zintegrowano `ScrollToPlugin` od GSAP.
- Przepisano Nawigację (`Navbar.jsx`) i Stopkę (`Footer.jsx`) tak, aby przejmowały zdarzenie kliknięcia (`e.preventDefault()`) i płynnie przesuwały okno do odpowiedniej sekcji, korzystając ze zmodyfikowanych wskaźników OffsetY (aby uwzględnić wysokość pływającego paska nawigacji).
- Dodano aktualizację paska adresu za pomocą `window.history.pushState`, by użytkownik mógł kopiować linki do konkretnych sekcji.

## 3. Integracja Formularza Netlify w Ekosystemie React (SPA)

**Problem 1: Niewidzialność formularza dla Netlify**
React renderuje komponenty dynamicznie po stronie klienta (Client-Side Rendering). Boty Netlify analizujące kod podczas budowy (Deploy) ich nie widziały, przez co nie rejestrowały formularza.
**Rozwiązanie:** W głównym pliku `index.html` zaimplementowano ukryty, statyczny szkielet `<form data-netlify="true" hidden>`. Dzięki temu Netlify wykrywa strukturę, a dynamiczny formularz w `Contact.jsx` wysyła tam dane po zgodnym parametrze `name="kontakt-footer"`.

**Problem 2: Rozsuwanie i zwijanie przycisku kontaktowego**
Konflikt klas obcinających widoczność Tailwind (`h-0`) z właściwościami dodawanymi bezpośrednio w tag przez GSAP (`style="height: auto"`). Skutkowało to zablokowaniem formularza na stałe w pozycji "Otwarte".
**Rozwiązanie:** Calkowicie odebrano Tailwind CSS kontrolę nad wysokością. Napisano precyzyjną instrukcję warunkową w GSAPie `to()` określającą, że zamknięcie to twarde `height: 0`, a otwarcie to `height: auto` – harmonizując to w jednym, czystym obszarze logicznym.

**Problem 3: Błąd "Page Not Found" (404) po wysłaniu formularza**
Standardowy atrybut wywołania `action="/dziekuje"` wymusza na przeglądarce pełne przeładowanie ekranu wysyłając żądanie POST pod nowy adres URL. Serwer (zarówno lokalny Vite, jak i serwery w chmurze bez konkretnych zasad) nie odnajdywał fizycznego piku `dziekuje.html`, crashując aplikację.
**Rozwiązania:**
- **Żądanie AJAX** w tle formularza: Zastąpiono natywny mechanizm HTML asynchronicznym zapytaniem asynchronicznym Javascript (`fetch("/", { method: "POST" ...})`).
- Po udanym wywołaniu, to aplikacja Reactowa zmienia ścieżkę w adresie url `window.history.pushState` i błyskawicznie podmienia widok – bez żadnego mrugnięcia czy przeładowania przeglądarki.

## 4. Architektura Routingu bez zewnętrznej biblioteki (React Router)

**Problem:** Posiadanie jednej lub dwóch dodatkowych podstron (strona Podziękowania, Polityka prywatności, Regulamin) tradycyjnie wymagało zainstalowania dużej, obciążającej kod biblioteki takiej jak `react-router-dom`.
**Rozwiązanie:** Aby zachować ultralekki rozmiar i szybkość wczytywania, zbudowaliśmy mały, własny "state-based router" bezpośrednio w komponencie głównym `App.jsx`. Aplikacja sprawdza adres przez zmienną `window.location.pathname` (przy wsparciu hooków `useState` i `useEffect`) i podmienia na ekranie to co widzi powiadamiając widza np. `LegalPage` jeśli ścieżka to `/regulamin`.

## 5. Przystosowanie Serwerowe i SEO (_Redirects / Favicons)

**Problem 1: Odświeżenie podstrony wywalało do kosmosu (Błąd serwera przy hostingu)**
Nawet przy naszym lekkim routingu React, kliknięcie klawisza F5 bedąc na `/regulamin` na hostingu skończyłoby się błędem 404. Hosting szuka podkatalogu serwera o takiej nazwie i ginie, bo aplikacja cała przebywa w tylko jednym pliku `index.html`.
**Rozwiązanie:** Stworzono niezwykle istotny plik `public/_redirects` narzucający serwerom Netlify sztywną komendę `/* /index.html 200`. Każde żądanie, bez znaczenia jak dziwne gubi serwer, jest przymusowo odsyłane do głównego indeksu gdzie React zajmuje się resztą w locie.

**Problem 2: Brak tożsamości w Google i Social Mediach**
**Rozwiązania:**
- Napisano od zera metatagi **Open Graph** w nagłowku `index.html`. Wysyłanie strony na SMS, Slack, Facebooka etc. skutkuje teraz profesjonalnym wyciągnięciem okładki witryny i krótkich korzyści biznesowych w zgrabny kafelek.
- Zastąpiono generyczne ikony narzędzia Vite. Zaimplementowano plik z brandowym logo `Piekarczyk_Logo.jpg` wraz ze wsparciem dla systemu Apple (`apple-touch-icon`).

## 6. Wymogi Prawne (Business Ready)

**Problem:** Pierwotny projekt jako pojedynczy strumień wizualny nie brał pod uwagę surowego prawa Unii Europejskiej regulującego gromadzenie Leadów korporacyjnych i B2C (RODO).
**Rozwiązania:**
- Utworzono od zera konfigurowalny i nieinwazyjny komponent powiadomień `CookieBanner.jsx`. Podparto go trwałym buforem przeglądarki `localStorage`, żeby nie irytować stałych bywalców strony przy każdej odświeżonej sesji. 
- Rozbudowano architekturę `Contact.jsx` wymuszając interakcję z chekboxem "Zgoda na przetworzenie danych" wpisując te informacje do ukrytego serca systemu zbierającego zapytania z Netlify.
- Przygotowano zintegrowany z Design Systemem skalowalny, ujednolicony moduł typograficzny odpowiedzialny za wielostronicowe referaty typu `Polityka Prywatności` i `Regulamin Sklepu`.
