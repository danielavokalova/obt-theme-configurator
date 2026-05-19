# Archiv konverzace — OBT Theme Configurator

**Datum:** 19. května 2026  
**Stav:** **UZAVŘENO** (finální relace — doladění barev a pozadí)  
**Účel:** Interaktivní konfigurátor vzhledu pro Online Booking Tool (letenky) — GOL vizáž

---

## Veřejná adresa (finální)

**https://danielavokalova.github.io/obt-theme-configurator/**

| | Lokálně | Veřejně |
|---|---|---|
| URL | `file:///…/obt-configurator.html` | odkaz výše |
| Repozitář | — | https://github.com/danielavokalova/obt-theme-configurator |

Nasazení: GitHub Pages z větve `main` (`.github/workflows/github-pages.yml`).

---

## Shrnutí požadavků

1. Single-page aplikace pro live preview vzhledu OBT.
2. **6 barevných šablon** + ruční úprava barevných rolí.
3. **Volitelná pozadí** (odděleně od barev).
4. Maketa podle reálného GOL screenshotu.
5. Editace kliknutím na oblast v náhledu.
6. Export JSON pro klientský portál / DB.
7. Bez placených služeb — standalone HTML.

---

## Rozhodnutí (finální stav)

| Téma | Rozhodnutí |
|------|------------|
| Technologie | **`obt-configurator.html`** (React + Tailwind CDN) |
| Struktura barev | **7 rolí** (viz tabulka níže) |
| Search widget | Okraje / tělo / čára odděleně |
| GOL default `pageBg` | **`#EEF3F6`** |
| GOL default ostatní | `menu: #FFFFFF`, `searchForm: #EBF8FF`, `searchFormBody: #FFFFFF`, `searchFormLine: #E25813`, `accent: #E25813`, `text: #1A365D` |
| Volitelná pozadí | Při výběru obrázku pokrývá **celý náhled** — `pageBg` se v preview nezobrazuje |
| Pozadí default | `none` |
| Hosting | GitHub Pages, public repo |

---

## 7 barevných rolí

| Klíč | Popis |
|------|--------|
| `pageBg` | Pozadí stránky (jen režim bez hero obrázku) |
| `menu` | Hlavička + horní navigace |
| `searchForm` | Okraje widgetu — neaktivní záložky, spodní lišta |
| `searchFormBody` | Tělo widgetu — pole From, To, Options, datumy |
| `searchFormLine` | Čára mezi tělem a spodní lištou + horní okraj aktivní záložky |
| `accent` | Logo, tlačítka, odkazy |
| `text` | Nadpisy, popisky, hodnoty polí |

---

## Export JSON (finální příklad)

```json
{
  "preset": "GOL Orange",
  "presetId": "gol-orange",
  "background": "none",
  "colors": {
    "pageBg": "#EEF3F6",
    "menu": "#FFFFFF",
    "searchForm": "#EBF8FF",
    "searchFormBody": "#FFFFFF",
    "searchFormLine": "#E25813",
    "accent": "#E25813",
    "text": "#1A365D"
  }
}
```

---

## Historie iterací

1. Vite + React prototyp → standalone HTML.
2. Veřejné nasazení na GitHub Pages.
3. `searchFormBody` — tělo formuláře odděleně od okrajů.
4. `searchFormLine` — editovatelná čára ve formuláři (odděleně od akcentu).
5. Volitelná pozadí na celý náhled bez prosvítání `pageBg`.
6. Výchozí `pageBg` změněno na `#EEF3F6`.
7. Finální archivace.

---

## Doporučené další kroky

1. Schválení vzhledu s klientem / produktem.
2. Mapování `colors` na CSS proměnné v produkčním OBT.
3. API + DB pro uložení presetu na `client_id`.
4. Odkaz z help portálu na configurator.

---

*Archiv uzavřen 19. 5. 2026 — Cursor.*
