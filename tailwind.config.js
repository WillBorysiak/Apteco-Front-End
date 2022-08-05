/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				amatic: ['Amatic SC', 'san-serif'],
				kalam: ['Kalam', 'san-serif'],
			},
		},
	},
	plugins: [],
};
