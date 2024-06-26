/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");

export default withMT({
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},

		extend: {
			colors: {
				/* colors */
				greenPrimary: "#559E44",
				redPrimary: "#BA131A",
				bluePrimary: "#397BC2",
				yellowPrimary: "#FAD008",
				mintGreen: "#008C99",
				orangePrimary: "#EA632C",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), nextui()],
	darkMode: "class",
});
