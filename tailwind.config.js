/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#bc1c29",

					secondary: "#dfbbf7",

					accent: "#0369a1",

					neutral: "#232C3E",

					"base-100": "#F9FAFB",

					info: "#2D53D2",

					success: "#1B6F3A",

					warning: "#EFB271",

					error: "#F46281",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
