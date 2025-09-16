/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					DEFAULT: '#2c5530',
					light: '#4a7c59',
					dark: '#1a3319',
				},
				'secondary': {
					DEFAULT: '#f8f9fa',
					dark: '#e9ecef',
				},
				'accent': {
					DEFAULT: '#d4af37',
					light: '#f4e4a6',
				},
			},
			fontFamily: {
				sans: ['Inter', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1.5rem',
				screens: {
					'2xl': '1200px',
				},
			},
		},
	},
	plugins: [],
}