# OBT Theme Configurator

📁 **Archiv konverzace:** [ARCHIVE-konverzace-2026-05-19.md](./ARCHIVE-konverzace-2026-05-19.md)

## Veřejná verze (online)

**https://danielavokalova.github.io/obt-theme-configurator/**

Nasazení probíhá automaticky z větve `main` přes GitHub Pages (workflow `.github/workflows/github-pages.yml`).

## Spuštění lokálně

Otevřete v prohlížeči (dvojklik):

**`obt-configurator.html`**

Žádná instalace, žádné placené služby.

## Barvy (5 rolí — jako na vašem webu)

| Role | GOL Orange default |
|------|-------------------|
| Pozadí stránky | `#DDE8F0` |
| Menu / hlavička | `#1A365D` |
| Search formulář | `#EBF8FF` |
| Ikony a zvýraznění | `#E25813` |
| Barva písma | `#1A365D` |

- Klik na oblast v náhledu → úprava v levém panelu
- Color picker + hex pole
- 6 přednastavených šablon
- Pozadí (hero) je volitelné, odděleně

## Export JSON

```json
{
  "preset": "GOL Orange",
  "presetId": "gol-orange",
  "background": "none",
  "colors": {
    "pageBg": "#DDE8F0",
    "menu": "#1A365D",
    "searchForm": "#EBF8FF",
    "accent": "#E25813",
    "text": "#1A365D"
  }
}
```
