# OBT Theme Configurator

📁 **Archiv konverzace:** [ARCHIVE-konverzace-2026-05-19.md](./ARCHIVE-konverzace-2026-05-19.md)

## Veřejná verze (online)

**https://danielavokalova.github.io/obt-theme-configurator/**

Nasazení probíhá automaticky z větve `main` přes GitHub Pages (workflow `.github/workflows/github-pages.yml`).

## Spuštění lokálně

Otevřete v prohlížeči (dvojklik):

**`obt-configurator.html`**

Žádná instalace, žádné placené služby.

## Barvy (7 rolí — jako na vašem webu)

| Role | GOL Orange default |
|------|-------------------|
| Pozadí stránky | `#E8ECF1` |
| Menu / hlavička | `#FFFFFF` |
| Search formulář — okraje | `#EBF8FF` |
| Tělo search formuláře | `#FFFFFF` |
| Čára ve formuláři | `#E25813` |
| Ikony a zvýraznění | `#E25813` |
| Barva písma | `#1A365D` |

- Klik na oblast v náhledu → úprava v levém panelu
- Color picker + hex pole
- 6 přednastavených šablon
- Pozadí (hero) je volitelné, odděleně — při výběru obrázku pokrývá celý náhled (barva „Pozadí stránky“ se v náhledu neukáže)

## Export JSON

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
    "searchFormLine": "#E25813",
    "accent": "#E25813",
    "text": "#1A365D"
  }
}
```
