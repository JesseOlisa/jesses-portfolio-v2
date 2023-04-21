/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'profile-bg':
					'linear-gradient(232deg, rgba(62,42,152,1) 10%, rgba(191,64,191,1) 100%)',
				'skills-pattern': "url('/skills.png')",
			},
			grayscale: {
				30: '30%',
			},
			keyframes: {
				fade: {
					'0%': {
						opacity: 0,
						transform: 'scale(0)',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
				line: {
					'0%': {
						width: '20%',
					},
					'100%': {
						width: '90%',
					},
				},
			},
			animation: {
				'fade-in': 'fade 0.6s ease-in-out',
				'slide-in': 'line 1.5s linear',
			},
		},
	},
	plugins: [],
};
