// @ts-check
"use client";
import ReactLenis from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

export default function Providers({ children }) {
	return (
		<ReactLenis root={true}>
			<EmojiProvider data={emojiData}>
				{children}
				<Analytics />
				<SpeedInsights />
			</EmojiProvider>
		</ReactLenis>
	);
}