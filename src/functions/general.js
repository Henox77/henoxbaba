// @ts-check

/**
 *
 * @param {import("@/jsdoc").Activity} activity
 * @returns {string}
 */
export function getAssetImage(activity) {
	if (!activity || !activity.assets || !activity.assets.large_image) return "";
	const largeImage = activity.assets.large_image;
	if (!largeImage) return "";

	return `https://media.discordapp.net/external/${largeImage.split("/").slice(1).join("/")}`;
};

/**
 *
 * @param {string} text
 * @returns
 */
export function stringify(text) {
	const regex = /\*\*(.*?)\*\*/g;
	return text.split(regex).map((part, index) => {
		if (index % 2 === 1) {
			return <span key={index} className="underline text-white font-semibold" style={{ textDecoration: "underline" }}>{part}</span>;
		}

		return part;
	});
};