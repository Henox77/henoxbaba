/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "cdn.discordapp.com" },
			{ protocol: "https", hostname: "pbs.twimg.com" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
			{ protocol: "https", hostname: "media.discordapp.net" },
			{ protocol: "https", hostname: "i.scdn.co" },
		],
	},
};

export default nextConfig;
