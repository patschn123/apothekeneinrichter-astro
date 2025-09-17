// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.apothekeneinrichter.de',
  integrations: [
    mdx({
      // Extend Markdown config for MDX
      extendMarkdownConfig: true,
      // Enable GitHub Flavored Markdown
      gfm: true,
      // Use Shiki for syntax highlighting
      syntaxHighlight: 'shiki',
      // Add remark plugins for better content processing
      remarkPlugins: [
        remarkGfm,
        [remarkToc, { heading: 'toc', maxDepth: 3 }]
      ],
      // Add rehype plugins for HTML processing
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }]
      ],
    }),
    sitemap(),
    tailwind(),
  ],
  // Global Markdown configuration
  markdown: {
    // Enable GitHub Flavored Markdown
    gfm: true,
    // Use Shiki for syntax highlighting
    syntaxHighlight: 'shiki',
    // Shiki theme configuration
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
    // Add remark plugins
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { heading: 'toc', maxDepth: 3 }]
    ],
    // Add rehype plugins
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }]
    ],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
});
