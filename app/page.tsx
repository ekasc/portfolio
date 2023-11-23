import { GridTile } from "@/components/ui/grid-tile";
import {
	EmailIcon,
	GithubIcon,
	GoIcon,
	LocationIcon,
	NeovimIcon,
	NextjsIcon,
	PostgresIcon,
	ReactIcon,
	SvelteIcon,
	TailwindcssIcon,
	TwitterIcon,
	TypescriptIcon,
	UnderConstructionIcon,
} from "@/components/ui/icons";
import { Variants } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="relative h-full ">
				<div className="absolute flex h-full w-full justify-center">
					<div className="sticky top-0 lg:-top-[60px] z-40 flex h-[60px] w-[120px] items-center justify-center rounded-b-full border-b border-foreground/20 bg-background lg:h-[120px] lg:rounded-full lg:border-b">
						<div className=" flex h-[55px] w-[110px] items-center justify-center rounded-b-full border-b border-foreground/30 bg-background lg:h-[110px] lg:rounded-full">
							<div className=" h-[50px] w-[100px] rounded-br-full lg:h-[100px] lg:rounded-full"></div>
						</div>
					</div>
					<div className="bg-grid fixed z-0 h-full w-full"></div>
					<div className="bg-conic fixed z-10 h-full w-full"></div>
				</div>
				<div className="relative z-30 mx-8 grid grid-cols-2 gap-5 pb-20 pt-[80px] lg:mx-40 lg:grid-cols-3 lg:pt-[150px]">
					<div className="col-span-2 space-y-2 rounded-xl border border-border/10 bg-background p-10 ">
						<h1 className="text-xl lg:text-4xl">hi, i'm ekas</h1>
						<p className="text-sm lg:text-xl">
							I work with computers, building software and web
							experiences. Open to new projects and
							collaborations.
						</p>
					</div>
					<GridTile className="col-span-2 lg:col-span-1 flex gap-2 lg:text-3xl">
						<LocationIcon /> New Delhi
					</GridTile>
					<div className="flex items-center justify-center space-y-2 rounded-xl border border-border/10 bg-background col-span-2 lg:col-span-1 lg:row-span-2 lg:p-10 p-4">
						<h1 className="lg:text-4xl">Building blocks</h1>
					</div>
					<div className="grid col-span-2 lg:grid-rows-2 grid-cols-4 gap-5 lg:col-span-2 lg:row-span-2 lg:grid-cols-4">
						<GridTile>
							<ReactIcon />
						</GridTile>
						<GridTile>
							<NextjsIcon />
						</GridTile>
						<GridTile>
							<SvelteIcon />
						</GridTile>
						<GridTile>
							<TailwindcssIcon />
						</GridTile>
						<GridTile>
							<TypescriptIcon />
						</GridTile>
						<GridTile>
							<GoIcon />
						</GridTile>
						<GridTile>
							<NeovimIcon />
						</GridTile>
						<GridTile>
							<PostgresIcon />
						</GridTile>
					</div>
					<div className="flex items-center col-span-2 justify-center space-y-2 rounded-xl border border-border/10 bg-background p-10 lg:col-span-1 lg:row-span-2">
						<h1 className="lg:text-4xl">Works</h1>
					</div>
					<div className="grid lg:grid-cols-4 col-span-2 lg:grid-rows-2 lg:col-span-2 lg:row-span-2 ">
						<div className="flex flex-col items-center justify-center space-y-2 rounded-xl border border-border/10 bg-background p-10 lg:col-span-4 lg:row-span-2">
							<UnderConstructionIcon />
							<h1 className="lg:text-3xl ">under construction</h1>
						</div>
					</div>
					<div className="flex items-center justify-center col-span-2 rounded-xl border border-border/10 bg-background p-10 lg:col-span-3 lg:row-span-2">
						<h1 className="lg:text-3xl">
							Don't hesitate to reach out – let's connect and make
							things happen!
						</h1>
					</div>
					<GridTile>
						<EmailIcon />
					</GridTile>
					<GridTile>
						<GithubIcon />
					</GridTile>
					<GridTile className="col-span-2 lg:col-span-1">
						<TwitterIcon />
					</GridTile>
					<GridTile className="lg:col-span-3 lg:text-lg text-sm col-span-2">
						<p>
							<q className="italic">
								Fast, cheap, good, pick two.
							</q>{" "}
							- Sun Tzu (probably)
						</p>
					</GridTile>
				</div>
				<div className="relative z-50 flex items-center justify-center p-2">
					<p className="text-sm">
						Made using{" "}
						<Link
							target="_blank"
							className="hover:underline hover:underline-offset-2"
							href="https://nextjs.org"
						>
							Next.js
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 50,
		rotate: -10,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};
