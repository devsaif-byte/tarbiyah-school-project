/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		// "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		container: {
			center: true,
		},

		extend: {
			colors: {
				/* colors */
				greenPrimary: "#559E44",
				redPrimary: "#DB2D1C",
				bluePrimary: "#397BC2",
				yellowPrimary: "#E76932",
				mintGreen: "#f7f7f7",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tw-elements/dist/plugin.cjs"),
		// require("flowbite/plugin"),
	],
	// darkMode: "class",
};
