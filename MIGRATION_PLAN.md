# Apothekeneinrichter.de Migration to Astro + MDX

## Project Overview
Migrating https://www.apothekeneinrichter.de/ to a modern Astro build with MDX support, local images, and SEO optimization.

**Current Site Analysis:**
- German pharmacy & medical practice interior design company (founded 1881)
- Services: Custom furniture, pharmacy installations, medical practices, living space furniture
- Current pages: Company, Services, Portfolio sections, Contact, Blog
- Uses Matomo analytics, responsive design with image carousels

## Migration Phases

### Phase 1: Project Setup & Configuration ✅
- [x] Create MIGRATION_PLAN.md in project root
- [x] Initialize Astro project with TypeScript support
- [x] Configure Astro integrations:
  - `@astrojs/mdx` for MDX content support
  - `@astrojs/sitemap` for SEO sitemap generation
  - `@astrojs/tailwind` for styling
- [x] Set up directory structure with centralized styles
- [x] Create content collections configuration
- [x] Create comprehensive global.css design system

### Phase 2: Design System & Global Styles ✅
- [x] Create centralized design system in `src/styles/global.css`:
  - CSS custom properties for colors, typography, spacing
  - German typography settings and font loading
  - Responsive breakpoints and grid system
  - Component-specific utility classes
  - Animation and transition definitions
- [x] Define design tokens and import in base layout

### Phase 3: Page Structure & Content Migration ✅
- [x] Create content collections configuration with TypeScript schemas
- [x] Convert existing pages to Astro format:
  - Homepage (`src/pages/index.astro`)
  - Company (`src/pages/unternehmen.astro`)
  - Services (`src/pages/leistungen.astro`)
  - Contact (`src/pages/kontakt.astro`)
  - Service-specific pages (`apothekeneinrichtungen.astro`, `arztpraxen.astro`, `wohnraummoebel.astro`)
  - Legal pages (`impressum.astro`, `datenschutz.astro`, `agb.astro`)

### Phase 4: Component Development ✅
- [x] Create reusable components:
  - Header with navigation
  - Footer with contact info
  - Navigation component
- [x] Implement responsive navigation matching current site

### Phase 5: SEO Optimization ✅
- [x] Implement comprehensive meta tags system
- [x] Add structured data (JSON-LD) for business info, services, projects
- [x] Configure XML sitemap generation
- [x] Implement German language meta tags and hreflang
- [x] Set up Open Graph and Twitter Card meta tags
- [x] Configure German i18n in astro.config.mjs

### Phase 6: Image Asset Management & Final Setup 🔄
- [ ] Add robots.txt configuration
- [ ] Download and organize existing images into `public/images/`
- [ ] Update Matomo analytics URLs (currently placeholder)
- [ ] Implement Astro's built-in image optimization

### Phase 7: Content Population (Future)
- [ ] Populate content collections with actual content:
  - `projects/` - Portfolio projects with images
  - `blog/` - News/blog posts
  - `services/` - Service descriptions
- [ ] Create dynamic blog pages if needed

### Phase 8: Testing & Launch Preparation
- [ ] SEO audit with Lighthouse
- [ ] Performance testing and optimization
- [ ] Content accuracy verification

## Expected File Structure
```
├── MIGRATION_PLAN.md
├── astro.config.mjs
├── package.json
├── src/
│   ├── styles/
│   │   ├── global.css          # Central design system
│   │   └── components/         # Component-specific styles
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── unternehmen.astro   # Company page
│   │   ├── leistungen.astro    # Services
│   │   ├── apothekeneinrichtungen.astro
│   │   ├── arztpraxen.astro
│   │   ├── wohnraummöbel.astro
│   │   ├── kontakt.astro       # Contact
│   │   └── blog/               # Blog pages
│   ├── content/
│   │   ├── projects/           # Portfolio projects
│   │   ├── services/           # Service descriptions
│   │   └── blog/               # Blog posts
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── ImageCarousel.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Imports global.css
│   │   └── BlogLayout.astro
│   └── assets/
│       ├── images/             # Local optimized images
│       └── fonts/              # Web fonts
```

## Key Features
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemaps
- **Performance**: Astro's static generation, image optimization, code splitting
- **German Localization**: Proper language configuration and typography
- **Maintainable**: Centralized design system, TypeScript, content collections
- **Accessible**: WCAG 2.1 compliance
- **Analytics**: Matomo integration maintained

## Token Management Strategy
After each phase completion:
1. Archive detailed implementation logs
2. Keep only essential progress notes
3. Compress context for next phase
4. Update this plan with completion status