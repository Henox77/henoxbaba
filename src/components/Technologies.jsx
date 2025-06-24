// @ts-check
import config from "@/config.js";

export default function Technologies() {
	return (
		<div className="mt-20 pb-10">
			<h2 className="text-3xl font-semibold">Technologies</h2>
			<p className="text-sm text-[#a1a1aa] mb-5">Here are a few technologies I use in web development and backend development.</p>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
				{config.technologies.map((technology, index) => (
					<span
						key={index}
						className="bg-zinc-800/30 border-2 cursor-pointer rounded-xl border-opacity-0 hover:border-opacity-100 hover:border-zinc-500 py-2 px-4 text-sm flex items-center gap-x-3 hover:bg-zinc-900 transition-all"
						style={{ color: `rgb(${technology.color})`, borderColor: `rgba(${technology.color}, 0)`, backgroundColor: `rgba(${technology.color}, 0.1)` }}
						onMouseEnter={(event) => {
							event.currentTarget.style.borderColor = `rgb(${technology.color})`;
							event.currentTarget.style.backgroundColor = `rgba(${technology.color}, 0.3)`;
						}}
						onMouseLeave={(event) => {
							event.currentTarget.style.borderColor = `rgba(${technology.color}, 0)`;
							event.currentTarget.style.backgroundColor = `rgba(${technology.color}, 0.1)`;
						}}
					>
						{technology.icon}
						{technology.id}
					</span>
				))}
			</div>
		</div>
	);
}