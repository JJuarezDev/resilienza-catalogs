/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        primary: {
					'50': '#faf6f6',
					'100': '#f5eeef',
					'200': '#ecdfe1',
					'300': '#dcc5c9',
					'400': '#d1b4b9',
					'500': '#b0838b',
					'600': '#986672',
					'700': '#7e525e',
					'800': '#6a4752',
					'900': '#5c3f49',
					'950': '#321f26',
				},			
      }
		},
	},
	plugins: [],
}
