/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: '#2E2E33',
				gray: '#58585C',
				primary: '#C87559',
				green: '#AEB591',
				yellow: '#F4E7D0',
				danger: '#E4392D'
			},
			boxShadow: {
				bottomMenu: '0px -10px 30px rgba(0, 0, 0, 0.08)'
			}
		}
	},
}
