## Apothekeneinrichter – Website (Astro + Tailwind CSS)

Marketing-Website für Apotheken- und Innenausbauprojekte, gebaut mit Astro, TypeScript und Tailwind CSS. Der Build erzeugt ein vollständig statisches Ergebnis in `dist/`, das auf jedem Static-Host bereitgestellt werden kann.

### Tech-Stack
- **Framework**: Astro
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content & Assets**: `src/pages`, `src/components`, `public/images`

### Voraussetzungen
- Node.js ≥ 18
- npm ≥ 9

### Entwicklung starten
```bash
npm install
npm run dev
```
Der Dev-Server läuft standardmäßig auf `http://localhost:4321`.

### Produktion bauen & lokal prüfen
```bash
npm run build
npm run preview
```
Das Produktions-Build liegt in `dist/`.

### Nützliche Skripte
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Dependencies installieren                        |
| `npm run dev`             | Lokaler Dev-Server (`localhost:4321`)            |
| `npm run build`           | Produktion nach `./dist/` bauen                  |
| `npm run preview`         | Produktion lokal vorschauen                      |
| `npm run astro ...`       | Astro-CLI, z. B. `astro add`, `astro check`      |
| `npm run astro -- --help` | Hilfe zur Astro-CLI                              |

### Projektstruktur
```text
/
├── public/                  # Statische Assets (Bilder, Icons)
├── src/
│   ├── components/          # Gemeinsame UI-Komponenten (Astro)
│   ├── layouts/             # Seiten-Layouts (z. B. BaseLayout)
│   ├── pages/               # Routen (z. B. index, kontakt, impressum, agb ...)
│   ├── styles/              # Globale Styles (Tailwind)
│   └── content/             # Content Collections (blog, projects, services)
├── dist/                    # Produktions-Build (Output)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Deployment
- Das Verzeichnis `dist/` kann auf jedem Static-Host (z. B. Netlify, Vercel, GitHub Pages, eigener Server) bereitgestellt werden.
- Optional: Nixpacks-Konfiguration vorhanden (`nixpacks.toml`).

### Hinweise
- Bilder liegen in `public/images/` und werden zur Build-Zeit unverändert übernommen.
- Seiten werden aus `.astro`-Dateien in `src/pages/` als Routen generiert.

### Links
- **Astro-Dokumentation**: [docs.astro.build](https://docs.astro.build)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

### Lizenz
© 2025. Alle Rechte vorbehalten. Bitte wenden Sie sich an die Projektinhaber für Nutzungsrechte.
