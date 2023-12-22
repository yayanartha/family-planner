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
				secondary: "#54EA54",
				background: "#E6EDFF",
				card: "#FFFFFF",
				text: "#1E2631",
				border: "#BFBFBF",
				notification: "#EE4444",
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
