# Archiv konverzace — OBT Theme Configurator

**Datum:** 19. května 2026  
**Stav:** **UZAVŘENO** (druhá relace — veřejné nasazení + tělo formuláře)  
**Účel:** Interaktivní konfigurátor vzhledu pro Online Booking Tool (letenky) — GOL vizáž

---

## Veřejná adresa (finální)

**https://danielavokalova.github.io/obt-theme-configurator/**

| | Lokálně (jen vy) | Veřejně (všichni) |
|---|---|---|
| URL | `file:///…/obt-configurator.html` | odkaz výše |
| Repozitář | — | https://github.com/danielavokalova/obt-theme-configurator |

Nasazení: GitHub Pages z větve `main` (workflow `.github/workflows/github-pages.yml`).

---

## Shrnutí požadavků

1. Single-page aplikace pro live preview vzhledu OBT.
2. **6 barevných šablon** + možnost **ruční úpravy barevných rolí**.
3. **Volitelná pozadí** (odděleně od barev).
4. Maketa podle **reálného GOL screenshotu**.
5. **Editace kliknutím** na oblast v náhledu.
6. **Export JSON** pro uložení do klientského portálu / DB.
7. **Bez placených služeb** — standalone HTML + volitelný Vite prototyp.

---

## Rozhodnutí během konverzace

| Téma | Rozhodnutí |
|------|------------|
| Technologie | **`obt-configurator.html`** (React + Tailwind přes CDN) |
| Vite projekt | V repozitáři, **nepovinný** pro běžné použití |
| Struktura barev | **6 rolí:** `pageBg`, `menu`, `searchForm`, `searchFormBody`, `accent`, `text` |
| Search widget | **Okraje** (`searchForm`) = neaktivní záložky + spodní lišta; **tělo** (`searchFormBody`) = pole From/To/Options/datumy |
| GOL default | `pageBg: #E8ECF1`, `menu: #FFFFFF`, `searchForm: #EBF8FF`, `searchFormBody: #FFFFFF`, `accent: #E25813`, `text: #1A365D` |
| Menu | Bílé (podle screenshotu) |
| Pozadí default | `none` |
| Hosting | GitHub Pages, samostatný public repo |

---

## Soubory projektu

```
obt-theme-configurator/
├── obt-configurator.html      ← HLAVNÍ zdroj (nasazuje se na web)
├── README.md
├── ARCHIVE-konverzace-2026-05-19.md   ← tento archiv
├── .github/workflows/github-pages.yml
└── src/                       ← volitelný Vite prototyp
```

**Cesta:** `C:\Users\DanielaVokálová\obt-theme-configurator\`

---

## 6 barevných rolí

| Klíč | Popis |
|------|--------|
| `pageBg` | Pozadí stránky za kartami |
| `menu` | Hlavička + horní navigace |
| `searchForm` | Okraje widgetu — neaktivní záložky, spodní lišta |
| `searchFormBody` | Tělo widgetu — pole From, To, Options, datumy |
| `accent` | Logo, tlačítka, aktivní záložka, odkazy |
| `text` | Nadpisy, popisky, hodnoty polí |

---

## Export JSON (aktuální příklad)

```json
{
  "preset": "GOL Orange",
  "presetId": "gol-orange",
  "background": "none",
  "colors": {
    "pageBg": "#E8ECF1",
    "menu": "#FFFFFF",
    "searchForm": "#EBF8FF",
    "searchFormBody": "#FFFFFF",
    "accent": "#E25813",
    "text": "#1A365D"
  }
}
```

---

## Historie iterací

1. Vite + React + Tailwind, 6 témat, 4 pozadí.
2. Standalone HTML bez npm.
3. 5 barevných rolí + klikací editace.
4. Úprava podle GOL screenshotu.
5. **Veřejné nasazení** na GitHub Pages.
6. **6. role `searchFormBody`** — oddělené tělo search formuláře od okrajů.
7. Archivace a uzavření (tento dokument).

---

## Doporučené další kroky (až budete pokračovat)

1. Schválení vzhledu s klientem / produktem.
2. Mapování `colors` na CSS proměnné v produkčním OBT.
3. API + DB pro `client_id`, preset, `background`, `colors`.
4. Odkaz z help portálu na veřejný configurator.

---

*Archiv uzavřen 19. 5. 2026 — Cursor.*
