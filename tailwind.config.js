/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				loading: "loading 2s infinite cubic-bezier(.48, -0.03, .12, .97)",
			},
			keyframes: {
				loading: {
					"0%": { transform: "translateX(-100%)", width: "50%" },
					"49.9%": { opacity: 1 },
					"50%": { transform: "translateX(205%)", opacity: 0 },
					"99.9%": { opacity: 0 },
					"100%": { opacity: 1, transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
