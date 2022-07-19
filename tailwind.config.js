/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			slate: colors.slate,
			gray: colors.gray,
			neutral: colors.neutral,
			black: colors.black,
			white: colors.white,
			black: colors.black,
			blue: colors.blue,
			midnight: {
				900: "#0A0A0D",
				800: "#1F1F26",
				700: "#333340",
				600: "#474759",
				500: "#5C5C73",
				400: "#70708C",
				300: "#8585A6",
				200: "#9999BF",
				100: "#ADADD9",
			},
		},
		fontFamily: {
			sans: ["Inter", "Arial", "sans-serif"],
			mono: ["Menlo", "Consolas", "monospace"],
		},
		extend: {
			spacing: {
				88: "22rem",
				96: "24rem",
				104: "27rem",
				120: "30rem",
				144: "36rem",
				180: "45rem",
				240: "60rem",
			},
		},
	},
	extend: {},
	plugins: [],
};
