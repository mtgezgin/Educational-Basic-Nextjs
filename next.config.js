/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['i.insider.com', 'storage.googleapis.com'],
	},
};

module.exports = nextConfig;
