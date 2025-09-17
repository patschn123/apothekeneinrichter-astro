# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Apothekeneinrichter Mädler, a German pharmacy and medical practice interior design company founded in 1881. The project is currently in active migration from a legacy site to a modern Astro + MDX setup with TypeScript, Tailwind CSS, and comprehensive SEO optimization.

**Key Information:**
- German-language business website (pharmacy/medical furniture)
- Site URL: https://www.apothekeneinrichter.de
- Uses Matomo analytics
- Docker deployment with Nixpacks configuration

## Development Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build and preview
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally

# Astro CLI
npm run astro        # Run Astro CLI commands
npm run astro -- --help  # Get Astro CLI help
```

## Architecture Overview

**Core Technologies:**
- **Astro 4.x** with SSG (Static Site Generation)
- **TypeScript** for type safety
- **Tailwind CSS** + custom design system in `src/styles/global.css`
- **MDX** for content with frontmatter validation
- **Sitemap generation** for SEO

**Project Structure:**
```
src/
├── content/          # Content collections (projects, services, blog)
│   └── config.ts     # Schema definitions with Zod validation
├── styles/
│   └── global.css    # Centralized design system with CSS custom properties
├── layouts/
│   └── BaseLayout.astro  # Main layout with comprehensive SEO meta tags
├── components/       # Reusable Astro components
├── pages/           # Route-based pages (German URLs)
└── assets/          # Local optimized assets
```

**Content Collections:**
- `projects/` - Portfolio projects with category schema (pharmacy, medical, residential)
- `services/` - Service descriptions with ordering
- `blog/` - Blog posts with author/publishing metadata

**Key Design Patterns:**
- Centralized design system using CSS custom properties (--color-primary, --font-family-primary, etc.)
- German localization (i18n config: defaultLocale: 'de')
- Comprehensive SEO with structured data (LocalBusiness schema)
- Component-based architecture with TypeScript interfaces

## German Language Specifics

- All pages use German URLs (`/unternehmen`, `/leistungen`, `/kontakt`)
- Content should maintain German typography and formatting
- Meta tags include German language directives
- Structured data uses German business information

## SEO Implementation

The BaseLayout includes:
- Comprehensive meta tags (title, description, canonical)
- Open Graph and Twitter Card support
- LocalBusiness structured data with company details
- German language and locale meta tags
- Matomo analytics integration (placeholder URLs need updating)

## Migration Status

This project is mid-migration following the detailed MIGRATION_PLAN.md. Key phases completed:
- ✅ Project setup with Astro integrations
- ✅ Content collections configuration
- ✅ Design system foundation
- 🔄 Currently implementing content migration and component development

When working on this project, reference MIGRATION_PLAN.md for context on the overall strategy and current phase objectives.

## Docker Deployment

Uses Nixpacks configuration (`nixpacks.toml`) with special handling for Rollup Linux binaries in Docker environments. The build process includes `@rollup/rollup-linux-x64-gnu` as an optional dependency for deployment compatibility.