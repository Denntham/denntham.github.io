// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
	compatibilityDate: '2025-07-27',
	devtools: { enabled: true },

	// Deployment target
	ssr: false,
	target: 'static',

	// Global page headers
	app: {
		head: {
			title: 'Denntham',
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ property: 'og:site_name', content: 'Denntham - Software Engineer' },
				// {
				// 	hid: 'description',
				// 	name: 'description',
				// 	content: 'Your personal website description',
				// },
			],
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/icon_16_light.svg' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'stylesheet',
					type: 'text/css',
					href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
				},
			],
		},
	},

	vite: {
		assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.webp'],
	},

	// GitHub Pages deployment config
	router: {
		base: process.env.NODE_ENV === 'production' ? '/' : '/',
		trailingSlash: true,
	},

	// Global CSS
	css: ['@/assets/css/main.css'],

	// Modules
	modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],

	// Tailwind CSS configuration
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
		configPath: 'tailwind.config.js',
	},

	// Google Fonts configuration
	googleFonts: {
		families: {
			'Fira Code': [400, 500, 600, 700],
			Inter: [400, 500, 600, 700], // Fallback
		},
		display: 'swap',
		preconnect: true,
		preload: true,
	},

	// Icon configuration
	icon: {
		size: '24px',
		collections: ['heroicons', 'mdi', 'simple-icons'],
	},

	// Generate configuration for static sites
	nitro: {
		prerender: {
			routes: ['/'],
			crawlLinks: true,
			failOnError: false,
		},
	},

	// Static generation configuration
	generate: {
		fallback: '404.html', // This creates 404.html for GitHub Pages
		routes: ['/', '/avatar.png'],
	},

	// Runtime config
	runtimeConfig: {
		public: {
			siteUrl:
				process.env.NODE_ENV === 'production'
					? 'https://denntham.github.io'
					: 'http://localhost:3000',
		},
	},
};
