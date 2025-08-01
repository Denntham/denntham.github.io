module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				navy: {
					50: '#f0f4f8',
					100: '#d9e6f2',
					200: '#b3cde0',
					300: '#8bb0cc',
					400: '#6493b8',
					500: '#3d76a4',
					600: '#2d5985',
					700: '#1e3c66',
					800: '#0f2744',
					900: '#001e3b', // Navy
				},
				gold: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fed7aa', // Light gold accent
					300: '#fdba74',
					400: '#fb923c',
					500: '#f59e0b', // Main gold
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
				gray: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
				},
				brand: {
					primary: '#001e3b',
					secondary: '#f59e0b',
					accent: '#fbbf24',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
