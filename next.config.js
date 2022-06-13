/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
		heroicons: true,
	},
	images: {
		domains: ["unsplash.com", "localhost:3000", "localhost:3333"],
	},
};
