# CAKEPOPS One-Page Landing Page Builder

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer.  
Build a high-fidelity, premium, minimalist **one-page landing page** for **CAKEPOPS.PL**.  
The site must feel elegant, soft-luxury, polished, and commercially sharp — not like a generic bakery template.

This is a **minimalist pink / cream / white** brand system with subtle premium motion, refined typography, soft shadows, rounded geometry, and smooth section transitions.

The website must be:
- modern
- lightweight in feel
- one-page only
- highly responsive
- visually premium
- commercially effective
- smooth to scroll
- easy to host on Cloudflare
- usable inside an Antigravity-style workflow

All **user-facing copy must be in Polish**.  
Code structure and comments may remain in English.

Do not build a generic confectionery website.  
Build a premium digital storefront with a soft editorial feel.

---

## Locked Brand Input — MUST USE

### Brand
**CAKEPOPS.PL**

### Brand / company description
Use this refined Polish copy in the About section:

**„Revela – Piekarczyk to oryginalny producent cakepopsów w Polsce.  
Od 2019 roku dostarczamy ręcznie robione cakepopsy, których receptura jest owocem współpracy z wieloma wspaniałymi cukiernikami oraz naszej pasji do doskonałości.”**

### Aesthetic Direction
Selected direction: **Preset A — Soft Luxury**

### Primary Brand Positioning
This brand should feel like:
- elegancka manufaktura
- nowoczesna marka premium
- miękka, czysta estetyka
- produkt dopracowany wizualnie i jakościowo
- sprzedaż B2B + B2C
- duży nacisk na jakość produktu i opłacalność dla klienta handlowego

### Primary CTA
- **Napisz do nas**
- **Zobacz ofertę**

### Important CTA logic
The offer is delivered **mailowo**, not as a typical downloadable pricing page.  
Design the CTA logic accordingly:

- Primary CTA: scroll to contact section or open contact interaction
- Secondary CTA: trigger an email-based offer request flow
- Must work cleanly on static Cloudflare hosting
- Use `mailto:` fallback with prefilled subject/body if needed
- Structure the code so an external email integration / extension can be connected later without rebuilding the whole UI

### Required One-Page Sections
1. Hero
2. O nas
3. Konkurencja / Dlaczego my
4. Galeria
5. Korzyści
6. Kontakt

### Required Comparison Content
Use this exact logic in the comparison section:

#### Section headline
**„Dlaczego nasze produkty są najlepsze na rynku?”**

#### Comparison rows
**ROZMIAR**
- CAKEPOPS.PL: „Średnica ok. 3,5 cm”
- Konkurencja: „ok. 2,5–3 cm”

**WAGA**
- CAKEPOPS.PL: „Waży 35–38 gramów”
- Konkurencja: „25–30 gramów”

**SMAK**
- CAKEPOPS.PL: „Ogromna ilość smaków do wyboru — intensywne i prawdziwe smaki”
- Konkurencja: „Często mały wybór, sztuczne i mało wyraziste smaki”

**ZYSK I LOGISTYKA**
- CAKEPOPS.PL: „Wysoka marża handlowa, szybki i bezpieczny dowóz w całej Polsce”
- Konkurencja: use a softer generic wording, without naming any brand directly, such as:
  „Często niższy potencjał marży i mniej przewidywalna logistyka”

### Required Benefits Content
Build a benefits section using these commercial advantages:
- **Wysoka marża handlowa** — „Dzięki wysokiej marży łatwo zwiększysz zysk”
- **Poszerzenie asortymentu**
- **Dodatkowa sprzedaż** — „Imprezy firmowe, wesela, urodziny i inne wydarzenia to idealna okazja do sprzedaży naszych cakepopsów”
- **Szybka i bezpieczna logistyka**

### Gallery intent
The gallery should communicate:
- wysoka estetyka produktu
- premium wykonanie
- różnorodność smaków / kolorów / okazji
- słodki stół / event / prezent / sprzedaż detaliczna / horeca

If no brand images are provided, use high-quality real editorial dessert imagery that matches the palette and mood. Avoid anything tacky, saturated, childish, or stock-looking.

---

## Aesthetic Preset

### Preset A — "Soft Luxury Patisserie"
- **Identity:** Elegant boutique confectionery meets modern editorial product branding.
- **Palette:**
  - Deep Ink `#1E2340` (Headings / contrast text)
  - Soft Pink `#EC5FA8` (Accent)
  - Blush `#F8EAF1` (Surface)
  - Cream `#FBF5F0` (Background)
  - White `#FFFFFF` (Cards / spacing / contrast)
  - Warm Gray `#8D8792` (Muted text / borders)
- **Typography:**
  - Headings: `"Cormorant Garamond"` or `"Playfair Display"` for elegant drama
  - Supporting headings / UI: `"Inter"` or `"Plus Jakarta Sans"`
  - Small labels / metadata: `"Inter"` or `"IBM Plex Sans"`
- **Image Mood:** cake pops, pastel confectionery, luxury dessert styling, blush cream editorial food photography, soft light, event sweets, clean table styling
- **Hero line pattern:**
  - Line 1: strong elegant statement in dark text
  - Line 2: italic or accent-highlighted premium phrase in pink

---

## Fixed Design System (NEVER CHANGE)

These rules apply to the whole website.

### Visual Language
- One-page only
- Soft-luxury minimalism
- Spacious layout
- Rounded geometry everywhere
- Clean premium contrast
- No clutter
- No cheap bakery clichés
- No loud gradients
- No childish iconography

### Surface System
- Use `rounded-[2rem]` to `rounded-[2.5rem]`
- Soft borders
- Subtle layered shadows
- Card-based contrast on cream background
- White and blush surfaces should alternate carefully

### Texture
- Add a very subtle premium texture/noise overlay globally
- Keep it extremely low-opacity so the site still feels clean and high-end

### Micro-Interactions
- Buttons must have a magnetic premium feel
- Hover states should be subtle, never aggressive
- Links slightly lift on hover
- Buttons can use sliding accent overlays or elegant fill transitions
- Active nav item should animate smoothly

### Motion Rules
- Motion must feel soft, premium, weighted
- Use GSAP for entrances and section reveals
- Use `gsap.context()` in `useEffect`
- Clean up all animations properly
- Default easing: `power3.out`
- Scroll-linked effects should be subtle, not theatrical
- This is a confectionery luxury brand, not a sci-fi dashboard

### Scroll Behavior
- Navbar is fixed / floating and remains visible while scrolling
- Clicking nav items must smooth-scroll to the proper section
- Use polished anchor navigation with animated sliding behavior
- On scroll, navbar changes from more transparent to more solid / blurred
- Add active section highlighting if possible

---

## Component Architecture (NEVER CHANGE STRUCTURE — only refine content)

### A. NAVBAR — "The Floating Ribbon"
A fixed, pill-shaped floating navbar centered horizontally near the top.

#### Behavior
- Transparent / lighter at the very top
- Transitions into a soft cream/white blurred pill with subtle border when scrolling
- Must move elegantly with the page and always remain accessible
- Smooth anchor navigation to:
  - Start
  - O nas
  - Dlaczego my
  - Galeria
  - Korzyści
  - Kontakt

#### Content
- Brand text logo: `CAKEPOPS.PL`
- Nav links
- CTA button: `Napisz do nas`

---

### B. HERO SECTION — "The Opening"
This must be a premium first impression.

#### Requirements
- Full-screen or near full-screen opening
- Refined editorial layout
- Strong left-aligned composition
- Soft, elegant background image or image block
- Light cream / blush atmosphere
- Clear hierarchy

#### Hero copy direction
Generate polished Polish copy based on this positioning:
- originalny producent cakepopsów w Polsce
- ręcznie robione
- premium jakość
- estetyka + smak + opłacalność

#### CTA setup
- Primary button: `Napisz do nas`
- Secondary button: `Zobacz ofertę`

The secondary CTA must support an email-based request flow, not a standard pricing page.

#### Motion
- Fade-up stagger reveal for eyebrow, headline, paragraph, CTAs
- Optional soft image parallax or float
- Keep motion refined and premium

---

### C. ABOUT SECTION — "O nas"
This section should communicate legacy, craft, and trust.

#### Content
Use the supplied copy, refined only for flow if needed:
**„Revela – Piekarczyk to oryginalny producent cakepopsów w Polsce.  
Od 2019 roku dostarczamy ręcznie robione cakepopsy, których receptura jest owocem współpracy z wieloma wspaniałymi cukiernikami oraz naszej pasji do doskonałości.”**

#### Layout
- Elegant two-column composition on desktop
- Text + image or text + soft stat blocks
- Could include small premium badges such as:
  - Od 2019 roku
  - Ręczna produkcja
  - Szeroki wybór smaków
  - Logistyka na całą Polskę

#### Tone
Warm, premium, credible, not inflated.

---

### D. COMPARISON SECTION — "Dlaczego nasze produkty są najlepsze na rynku?"
This is one of the most important sections.

#### Visual direction
Follow the logic of a premium side-by-side comparison similar to the provided visual reference:
- headline with two-tone emphasis
- stacked comparison groups
- each group has a small category pill label
- left card = `CAKEPOPS.PL`
- right card = `KONKURENCJA`
- left side visually highlighted in pink/blush
- right side muted / neutral
- use checkmark / minus style indicators if elegant

#### Required groups
1. Rozmiar
2. Waga
3. Smak
4. Zysk i logistyka

#### Rules
- Keep the competitor generic
- Do not name real competitors
- Keep the tone commercial but not legally reckless
- Use clean Polish microcopy
- Strong readability
- The section should feel like “why choose us”, not an attack page

#### Motion
- Each comparison row reveals on scroll
- Optional slight slide-in from opposite sides
- Keep it soft and elegant

---

### E. GALLERY SECTION — "Galeria"
This section should sell visually.

#### Intent
Show:
- estetyka premium
- jakość wykończenia
- różnorodność
- event use-cases
- desirability

#### Layout
- Modern masonry or asymmetrical premium grid
- Rounded cards
- Editorial spacing
- Hover zoom / soft parallax allowed
- No generic stock collage feeling

#### Image style
Use real imagery matching:
- cake pops
- pastel confectionery
- elegant dessert photography
- event sweets
- clean premium styling

If available, prioritize product-focused closeups and elegant event presentation.

---

### F. BENEFITS SECTION — "Korzyści"
This section should speak to business value clearly.

#### Required cards / blocks
Build elegant benefit cards using these messages:

1. **Wysoka marża handlowa**  
   „Dzięki wysokiej marży łatwo zwiększysz zysk.”

2. **Poszerzenie asortymentu**  
   Present this as an easy way to enrich a sweets, café, dessert, or event offer.

3. **Dodatkowa sprzedaż**  
   „Imprezy firmowe, wesela, urodziny i inne wydarzenia to idealna okazja do sprzedaży naszych cakepopsów.”

4. **Szybka i bezpieczna logistyka**  
   Emphasize convenience and reliable delivery.

#### Layout
- 2x2 grid on desktop
- stacked on mobile
- elegant cards, subtle icons allowed
- premium commercial clarity

---

### G. CONTACT SECTION — "Kontakt"
This section must convert.

#### Required behavior
- Make contact feel easy and direct
- The site should not depend on a backend to work in MVP form
- Use a strong email-based contact flow
- Prepare for Cloudflare-friendly deployment
- `mailto:` fallback should always work

#### Required content
Include:
- a short contact headline
- a short reassurance line
- CTA button: `Napisz do nas`
- CTA button or link: `Poproś o ofertę`
- prefilled email subject suggestion for the offer request, e.g.:
  - `Temat: Prośba o ofertę CAKEPOPS`
- prefilled email body suggestion with fields such as:
  - nazwa firmy / imię
  - rodzaj współpracy
  - planowana ilość
  - termin
  - numer telefonu

#### Optional UI
- Contact card
- polished inline form UI that degrades gracefully into email flow
- info chips
- note that oferta jest wysyłana drogą mailową

---

### H. FOOTER
Minimal, elegant, clean.

#### Include
- brand name
- short tagline
- compact navigation links
- contact CTA repeat
- optional small legal line

Keep it premium and light.  
No heavy dark enterprise footer unless it visually fits the palette.

---

## Copy Direction — MUST FOLLOW

All visible copy must be in Polish and should feel:
- premium
- natural
- clear
- sales-effective
- not cheesy
- not overblown
- not generic AI marketing language

Avoid:
- cliché luxury phrases
- excessive exclamation marks
- childish dessert language
- fake storytelling
- fake statistics
- fake reviews

Use concise, elegant, commercially useful Polish.

---

## Technical Requirements (NEVER CHANGE)

- **Stack:** React 19, Tailwind CSS v3.4.17, GSAP 3, Lucide React
- **Fonts:** Load through Google Fonts in `index.html`
- **Images:** Use real image URLs only, matching the aesthetic direction
- **File structure:** Prefer `App.jsx` + `index.css`, or split only if needed
- **Responsive:** Mobile-first, fully polished on mobile and desktop
- **Performance:** Keep animations smooth and non-bloated
- **One-page navigation only:** No unnecessary routes
- **Smooth scroll:** Must be implemented and polished
- **Navbar:** Fixed and animated on scroll
- **Accessibility:** Proper contrast, semantic sections, usable buttons and link states

### Contact / deployment constraints
- Must be Cloudflare-friendly
- Do not rely on a heavy backend for the core contact flow
- Build a static-first contact experience
- Structure optional future email integration cleanly
- Do not hard-code platform-specific hacks unless required

### Quality bar
- No placeholders
- No broken interactions
- No empty cards
- No fake brand assets
- No generic “bakery template” sections
- No pricing section unless naturally adapted into contact / offer request logic

---

## Build Sequence

1. Lock the design system to the Soft Luxury Patisserie preset.
2. Build a fixed floating navbar with smooth-scroll anchors and active behavior.
3. Create a strong premium hero with two CTAs.
4. Build the About section using the provided brand story.
5. Build the comparison section as the visual core of the page.
6. Build a premium editorial gallery.
7. Build a commercially sharp benefits section.
8. Build a contact section centered around email-based conversion.
9. Ensure all motion is refined, soft, and scroll-aware.
10. Make the whole one-page experience feel premium, lightweight, and intentional.

---

## Execution Directive

Do not build a generic sweets website.  
Build a premium one-page CAKEPOPS.PL landing page that feels elegant, modern, smooth, and commercially convincing.

Every section must justify its place.  
Every motion choice must feel intentional.  
Every CTA must help convert.  
The comparison section must be a standout visual argument.  
The final result should feel like a refined boutique food brand with real business value.