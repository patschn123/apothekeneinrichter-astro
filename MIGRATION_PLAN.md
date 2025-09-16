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

### Phase 2: Design System & Global Styles
- [ ] Create centralized design system in `src/styles/global.css`:
  - CSS custom properties for colors, typography, spacing
  - German typography settings and font loading
  - Responsive breakpoints and grid system
  - Component-specific utility classes
  - Animation and transition definitions
- [ ] Define design tokens and import in base layout

### Phase 3: Content Migration & Structure
- [ ] Create content collections:
  - `projects/` - Portfolio projects with images
  - `blog/` - News/blog posts
  - `services/` - Service descriptions
- [ ] Convert existing pages to Astro format:
  - Homepage (`src/pages/index.astro`)
  - Company (`src/pages/unternehmen.astro`)
  - Services (`src/pages/leistungen.astro`)
  - Contact (`src/pages/kontakt.astro`)
- [ ] Define TypeScript schemas for content validation

### Phase 4: Component Development
- [ ] Create reusable components:
  - Header with navigation
  - Footer with contact info
  - Image carousel/gallery component
  - Project showcase cards
  - Service feature blocks
  - Contact form component
- [ ] Implement responsive navigation matching current site

### Phase 5: Image Asset Management
- [ ] Download and organize existing images into `src/assets/`
- [ ] Implement Astro's built-in image optimization
- [ ] Create image collections for portfolios, services, blog
- [ ] Set up responsive image handling with WebP/AVIF formats

### Phase 6: SEO Optimization
- [ ] Implement comprehensive meta tags system
- [ ] Add structured data (JSON-LD) for business info, services, projects
- [ ] Create XML sitemap generation
- [ ] Add robots.txt configuration
- [ ] Implement German language meta tags and hreflang
- [ ] Set up Open Graph and Twitter Card meta tags

### Phase 7: Content Creation & MDX Implementation
- [ ] Convert existing content to MDX format
- [ ] Create MDX components for callouts, galleries, contact blocks
- [ ] Implement content collections with proper frontmatter

### Phase 8: Styling Integration & Design Implementation
- [ ] Integrate global.css with component styles
- [ ] Create component-specific CSS modules
- [ ] Implement responsive design matching current site
- [ ] Add animations and ensure accessibility compliance

### Phase 9: Analytics & Performance
- [ ] Integrate Matomo analytics (maintain current setup)
- [ ] Implement performance optimizations:
  - Code splitting, image lazy loading, font optimization
- [ ] Add Core Web Vitals monitoring

### Phase 10: German Localization & Content
- [ ] Set up proper German language configuration
- [ ] Ensure German typography and formatting
- [ ] Implement German date/time formatting

### Phase 11: Testing & Quality Assurance
- [ ] Cross-browser and mobile testing
- [ ] SEO audit with Lighthouse
- [ ] Performance testing and optimization
- [ ] Content accuracy verification

### Phase 12: Build Optimization & Deployment Preparation
- [ ] Configure Astro build settings for production
- [ ] Set up static site generation
- [ ] Create deployment scripts

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