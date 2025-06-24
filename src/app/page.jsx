// @ts-check
"use client";
import Backdrop from "@/components/Backdrop.jsx";
import Header from "@/components/Header.jsx";
import Activity from "@/components/Music.jsx";
import SplashScreen from "@/components/SplashScreen.jsx";
import Technologies from "@/components/Technologies.jsx";
import config from "@/config.js";
import { stringify } from "@/functions/general.js";
import useSocial from "@/hooks/useSocial.js";
import React from "react";

export default function Page() {
	const { data, isPending } = useSocial();
	if (typeof isPending === "boolean" && isPending == true) {return <SplashScreen />;}

	return (
		<React.Fragment>
			<Backdrop />
			<Header />

			<div className="mx-auto w-full max-w-4xl lg:px-8 mt-20 relative">
				<h2 className="text-4xl font-semibold">
					{data?.discord?.discord_user.global_name}
				</h2>
				<h3 className="text-4xl font-semibold text-[#a1a1aa]">
					{config.badge}
				</h3>
				<p className="text-[#a1a1aa] text-sm mt-2 max-w-2xl">
					{stringify(config.biography)}
				</p>
				<p className="text-[#a1a1aa] text-sm mt-3 max-w-2xl">
					{stringify(config.description)}
				</p>

				<Activity />

				<Technologies />
				<div className="mt-8 mb-16 text-center text-white font-semibold text-base drop-shadow-sm">
					Contact: <a href="mailto:contact@henox.xyz" className="underline hover:text-blue-400">contact@henox.xyz</a>
					<div className="flex justify-center mt-4">
						<a href="https://wa.me/8562076663419" target="_blank" rel="noopener noreferrer"
						   className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 transition-all text-white font-semibold shadow-lg text-lg group">
							<span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
									<path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421-10.63a8.633 8.633 0 0 0-8.623 8.633c0 1.522.401 3.008 1.162 4.304L2 22l5.217-2.009a8.61 8.61 0 0 0 3.834.917h.003a8.633 8.633 0 0 0 8.63-8.63c0-2.304-.898-4.473-2.527-6.102A8.59 8.59 0 0 0 12.05 3.75zm4.962 13.2c-.205.579-1.2 1.104-1.65 1.177-.425.07-.95.1-1.613-.118-.382-.12-.87-.28-1.497-.547-2.638-1.134-4.357-3.861-4.491-4.045-.134-.185-1.073-1.426-1.073-2.723 0-1.297.678-1.938.916-2.205.238-.267.516-.334.69-.334.173 0 .346.002.497.009.16.007.373-.06.586.454.223.536.474 1.104.53 1.188.055.085.09.186.018.31-.074.124-.111.198-.223.322-.111.124-.236.275-.337.368-.111.099-.227.206-.098.454.13.248.577.952 1.234 1.54.849.757 1.563 1.002 1.81 1.115.248.111.393.093.537-.056.149-.149.62-.722.787-.97.167-.248.33-.206.557-.124.223.074 1.414.667 1.656.788.242.124.403.185.463.288.06.104.06.6-.145 1.178z"/>
								</svg>
							</span>
							<span className="ml-1 group-hover:underline">WhatsApp</span>
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
