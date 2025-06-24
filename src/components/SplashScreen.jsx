// @ts-check
"use client";
import Backdrop from "@/components/Backdrop.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		const timeout = setTimeout(() => setShowPopup(true), 3 * 5000);

		return () => {
			document.body.style.overflow = "auto";
			clearTimeout(timeout);
		};
	}, []);

	const transition = {
		duration: 0.25,
		type: "spring",
		damping: 10,
		stiffness: 100,
	};

	return (
		<AnimatePresence>
			<Backdrop />
			<div className="fixed top-0 z-10 flex size-full flex-col items-center justify-center">
				<motion.div
					className="relative mt-8 h-[6px] w-[400px] overflow-hidden rounded-full bg-[#ffffff1a]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={transition}
				>
					<div
						className="absolute h-[6px] w-32 animate-loading rounded-full bg-white/90"
						style={{
							width: "50%",
							transform: "translateX(-100%)",
						}}
					/>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
