// @ts-check
import config from "@/config";
import React, { useEffect, useState } from "react";

/**
 * @typedef {{
 * discord: import("@/jsdoc").LanyardData;
 * github: import("@/jsdoc").GitHubUser & { repositories: (import("@/jsdoc").GitHubRepository & { pinned: boolean })[] }
 * }} Social
 */

export default function useSocial() {
	/** @type {[Social, React.Dispatch<Social>]} */
	const [data, setData] = useState(null);
	const [isPending, setPending] = useState(true);
	const [isInitialized, setInitialized] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!isInitialized) {
					setPending(true);
				}
				/** @type {import("@/jsdoc").LanyardData} */
				const discord = (await (await fetch(`https://api.lanyard.rest/v1/users/${config.discord.id}`)).json()).data;

				setData({ discord });

				if (!isInitialized) {
					setPending(false);
					setInitialized(true);
				}
			} catch (err) {
				setError(err);
				setPending(false); // Hata olursa da SplashScreen sonsuz kalmasın
			}
		};
		fetchData();

		const interval = setInterval(fetchData, 60 * 1000);
		return () => clearInterval(interval);
	}, [isInitialized]);

	return { data, isPending, error };
}