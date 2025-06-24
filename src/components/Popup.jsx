// @ts-check
"use client";
import cn from "@/functions/cn";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Emoji } from "react-apple-emojis";

/**
 * @param {{ iconName?: string; title?: string; description?: string; }} args0
 * @returns
 */
export default function Popup({ iconName, title, description }) {
	const [isDisabled, setDisabled] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 100 }}
			animate={{ opacity: 1, translateY: 0 }}
			className={cn(
				"fixed inset-x-0 lg:mx-0 lg:left-4 bottom-4  w-11/12 lg:w-1/4 p-4 mx-auto space-y-1 rounded-lg shadow-md select-none  ring-1 ring-white/10  bg-zinc-800/30 z-20 backdrop-blur-xl transition-all duration-300 shadow-black/10",
				isDisabled && "hidden"
			)}
		>
			<div className="flex items-center justify-between gap-2">
				<h3 className="font-medium leading-tight flex items-center gap-x-2 text-white">
					{iconName && (
						<picture>
							<Emoji className="size-4" name={iconName} />
						</picture>
					)}
					{title}
				</h3>
				<button
					onClick={() => setDisabled(true)}
					className="p-1 transition-colors rounded-full hover:bg-white/20 bg-white/10 text-white/70 hover:text-white"
				>
					<IconX size={12} />
				</button>
			</div>
			<p className="w-5/6 text-sm text-white/50">{description}</p>
		</motion.div>
	);
}
