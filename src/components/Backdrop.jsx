// @ts-check

export default function Backdrop() {
	return (
		<div className="fixed inset-0 mx-0 max-w-none overflow-hidden hidden md:block">
			<div className="absolute left-1/2 top-[-14.5px] ml-[-41.5rem] h-[25rem] w-[80rem] [mask-image:linear-gradient(white,transparent)]">
				<div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-purple-500/30 to-purple-800/30 opacity-100">
					<svg
						aria-hidden="true"
						className="absolute -inset-y-1/2 inset-x-0 h-[200%] w-full skew-x-[18deg]  stroke-transparent mix-blend-overlay fill-black/20"
					>
						<defs>
							<pattern
								id=":S2:"
								width="72"
								height="56"
								patternUnits="userSpaceOnUse"
								x="-12"
								y="4"
							>
								<path d="M.5 56V.5H72" fill="none" />
							</pattern>
						</defs>
						<rect
							width="100%"
							height="100%"
							strokeWidth="0"
							fill="url(#:S2:)"
						/>
					</svg>
				</div>
				<svg
					viewBox="0 0 1113 440"
					aria-hidden="true"
					className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-zinc-950 blur-[26px]"
				>
					<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
				</svg>
			</div>
		</div>
	);
}
