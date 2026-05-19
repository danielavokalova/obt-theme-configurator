# Archiv konverzace — OBT Theme Configurator

**Datum:** 19. května 2026  
**Účel:** Interaktivní konfigurátor vzhledu pro Online Booking Tool (letenky) — GOL vizáž

---

## Shrnutí požadavků

1. Single-page aplikace pro live preview vzhledu OBT.
2. **6 barevných šablon** + možnost **ruční úpravy 5 barevných rolí**.
3. **Volitelná pozadí** (odděleně od barev) — jen když klient chce hero obrázek.
4. Maketa podle **reálného GOL screenshotu** (bílá hlavička, oranžové akcenty, světle modro-šedé pozadí stránky).
5. **Editace kliknutím** na oblast v náhledu (jako u šablon dříve).
6. **Export JSON** pro uložení do klientského portálu / DB.
7. **Bez nových placených aplikací** — pouze jeden HTML soubor v prohlížeči.

---

## Rozhodnutí během konverzace

| Téma | Rozhodnutí |
|------|------------|
| Technologie | Finálně **`obt-configurator.html`** (React + Tailwind přes CDN), ne npm/Vite pro běžné použití |
| Vite projekt | Vytvořen dříve v `src/`, **nepovinný** — lze ignorovat |
| Struktura barev | 5 rolí: `pageBg`, `menu`, `searchForm`, `accent`, `text` |
| GOL default | `pageBg: #E8ECF1`, `menu: #FFFFFF`, `searchForm: #EBF8FF`, `accent: #E25813`, `text: #1A365D` |
| Menu | Bílé (podle screenshotu), ne tmavě modrá celá hlavička |
| Search widget | Bílá karta; spodní lišta = barva `searchForm` |
| Pozadí default | `none` (bez obrázku) |
| Externí fotky | Odstraněny z finální verze; pozadí = CSS/SVG |

---

## Soubory projektu

```
obt-theme-configurator/
├── obt-configurator.html      ← HLAVNÍ — otevřít v prohlížeči
├── README.md
├── ARCHIVE-konverzace-2026-05-19.md   ← tento archiv
└── src/                       ← volitelný Vite prototyp (npm run dev)
```

**Cesta:** `C:\Users\DanielaVokálová\obt-theme-configurator\`

---

## Spuštění

Dvojklik na `obt-configurator.html` nebo Soubor → Otevřít v prohlížeči.

---

## 5 barevných rolí

| Klíč | Popis na GOL webu |
|------|-------------------|
| `pageBg` | Pozadí stránky za kartami |
| `menu` | Hlavička + horní navigace |
| `searchForm` | Spodní lišta ve vyhledávacím widgetu |
| `accent` | Logo GOL, tlačítka, aktivní záložka, odkazy |
| `text` | Nadpisy, popisky, hodnoty polí |

---

## Přednastavené šablony

1. GOL Orange (default)  
2. Ocean Breeze  
3. Corporate Navy  
4. Sunset Magenta  
5. Eco Travel  
6. Luxury Gold  

---

## Volitelná pozadí

- `none` — Bez obrázku (default)  
- `clouds` — Mraky  
- `palms` — Pláž  
- `animated` — Animovaný gradient  

---

## Prvky makety (podle screenshotu)

- Logo GOL (oranžové kolečko), My reservations, Karel Novak, EN, Kč CZK  
- Navigace: Hotels, Car rental, Packages, About us, Contact us  
- Nadpis „Fly with us .“  
- Záložky One way / **Return** / Multi-city + tlačítko HOTELS  
- Pole From (Prague), To, Options, Departure/Return dates  
- Lišta: Only direct flights, All airlines, Tolerance ±, SEARCH FLIGHTS  
- Special offers: Singapore - Changi, 5 459 CZK, CHOOSE DATE  
- Footer: Pay securely, © CEE Travel Systems  

---

## Export JSON (příklad)

```json
{
  "preset": "GOL Orange",
  "presetId": "gol-orange",
  "background": "none",
  "colors": {
    "pageBg": "#E8ECF1",
    "menu": "#FFFFFF",
    "searchForm": "#EBF8FF",
    "accent": "#E25813",
    "text": "#1A365D"
  }
}
```

Tlačítko **Exportovat nastavení** → popup + `console.log` (F12).

---

## Doporučené další kroky (neprovedeno)

1. Schválení vzhledu s klientem / produktem.  
2. Mapování `colors` na CSS proměnné v produkčním OBT (`--obt-accent`, …).  
3. API + DB tabulka pro `client_id`, `presetId`, `background`, `colors`.  
4. Vložení konfigurátoru do existujícího OBT repozitáře (uživatel nedodal cestu).  
5. Pixel-perfect doladění podle finálního screenshotu, pokud budou připomínky.

---

## Historie iterací v konverzaci

1. Vite + React + Tailwind projekt s 6 tématy a 4 pozadími.  
2. Požadavek bez placených/nových aplikací → standalone HTML.  
3. Přechod na 5 barevných rolí + klikací editace v náhledu.  
4. Úprava podle screenshotu GOL (bílé menu, bílá karta, oranžové akcenty).  
5. Archivace konverzace (tento dokument).

---

*Archiv vytvořen agentem Cursor dle žádosti uživatele.*
