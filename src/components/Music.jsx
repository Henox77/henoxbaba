// @ts-check
import { YoutubeMusic } from "@/components/Icons.jsx";
import { getAssetImage } from "@/functions/general.js";
import useSocial from "@/hooks/useSocial.js";
import { IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Activity() {
	const { data } = useSocial();

	// Spotify aktifse göster
	if (data?.discord?.listening_to_spotify && data.discord.spotify) {
		const spotify = data.discord.spotify;
		return (
			<div className="mt-3">
				<div className="relative flex items-start gap-4 rounded-lg p-2 overflow-hidden w-full">
					<div className="relative z-10 flex-shrink-0 flex-grow-0 w-20 h-20 min-w-[80px] min-h-[80px]">
						<Image className="rounded-lg w-full h-full object-cover" src={spotify.album_art_url} alt={spotify.song} height={80} width={80} />
					</div>
					<div className="relative z-10 text-white flex flex-col justify-start">
						<h3 className="text-lg font-semibold leading-tight line-clamp-1 w-96">{spotify.song}</h3>
						<p className="text-sm opacity-80 line-clamp-1 w-96">{spotify.artist}</p>
						<p className="text-sm opacity-80 line-clamp-1 w-96">{spotify.album}</p>
					</div>
					<Link href={`https://open.spotify.com/track/${spotify.track_id}`} className="absolute top-2 right-2">
						<div className="h-9 w-9 flex items-center border border-white/5 justify-center bg-zinc-900/30 hover:bg-zinc-900/40 text-white/70 hover:text-white cursor-pointer backdrop-blur-md rounded-full shadow-inner shadow-black/10 relative transition-all ">
							<IconLink size={16} />
						</div>
					</Link>
				</div>
			</div>
		);
	}

	// Youtube Music aktifse göster
	const apps = {
		youtube: "463151177836658699",
	};
	const activities = (data?.discord?.activities ?? []).filter((val) => typeof val.application_id === "string");
	const activity = activities.find((val) => val.application_id === apps.youtube);
	if (!activity || typeof activity !== "object" || typeof activity?.timestamps?.end !== "number" || !activity.assets) return null;

	return (
		<div className="mt-3">
			<div className="relative flex items-start gap-4 rounded-lg p-2 overflow-hidden">
				<div
					className="absolute inset-0 scale-150 opacity-50 blur-3xl"
					style={{
						backgroundImage: getAssetImage(activity) ? `url(${getAssetImage(activity)})` : undefined,
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "brightness(0.6) saturate(1.4)",
					}}
				></div>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

				<div className="relative z-10">
					{getAssetImage(activity) && (
						<Image className="size-20 rounded-lg" src={getAssetImage(activity)} alt={activity.application_id} height={80} width={80} />
					)}
				</div>

				<div className="relative z-10 text-white flex flex-col justify-start">
					<h3 className="text-lg font-semibold leading-tight line-clamp-1 w-96">{activity.details}</h3>
					<p className="text-sm opacity-80 line-clamp-1 w-96">{activity?.state}</p>
					<p className="text-sm opacity-80 line-clamp-1 w-96">{activity.assets?.large_text || ""}</p>
				</div>

				<Link href="https://music.youtube.com" className="absolute top-2 right-2">
					<div className="h-9 w-9 flex items-center border border-white/5 justify-center bg-zinc-900/30 hover:bg-zinc-900/40 text-white/70 hover:text-white cursor-pointer backdrop-blur-md rounded-full shadow-inner shadow-black/10 relative transition-all ">
						<IconLink size={16} />
					</div>
				</Link>
			</div>
		</div>
	);
}