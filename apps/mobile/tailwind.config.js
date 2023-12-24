/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind");

module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"../../packages/**/*.{js,jsx,ts,tsx}",
	],
	presets: [nativewind],
	theme: {
		extend: {
			colors: {
				primary: "#050608",
				secondary: "#16c784",
				background: "#FFFFFF",
				card: "#F3F3F3",
				text: "#1E2631",
				form: "#EFEEF2",
				border: "#9B9D9E",
				notification: "#ea3943",
			},
			fontFamily: {
				IcoMoon: "IcoMoon",
				GabaritoRegular: "Gabarito-Regular",
				GabaritoSemiBold: "Gabarito-SemiBold",
				GabaritoBold: "Gabarito-Bold",
			},
		},
	},
};
