/* eslint-disable @next/next/no-img-element */
import { GridTile } from "@/components/ui/grid-tile";
import {
	EmailIcon,
	GithubIcon,
	GoIcon,
	LoadingIcon,
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
import { getRecentlyPlayed } from "@/lib/spotify";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

async function SpotifyTile({ className }: { className?: string }) {
	const track = await getRecentlyPlayed();

	return (
		<>
			<div
				className={cn(
					"relative items-center justify-center rounded-xl border border-border/10 bg-background transition duration-200 ease-in-out hover:cursor-pointer hover:border-[#1ED760]",
					className,
				)}
			>
				<Link href={track.href} target="_blank">
					<div className="absolute inset-0 p-3 ">
						<img
							src={track.cover}
							alt={track.title}
							className="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div className="relative flex h-full w-full flex-col justify-end px-5 pb-4">
						<p
							className="text-md overflow-hidden text-ellipsis whitespace-nowrap font-bold"
							title={track.title}
						>
							{track.title}
						</p>
						<p
							className="overflow-hidden text-ellipsis whitespace-nowrap text-sm"
							title={track.artist}
						>
							{track.artist}
						</p>
						<p
							className="overflow-hidden text-ellipsis whitespace-nowrap text-sm"
							title={track.album}
						>
							{track.album}
						</p>
					</div>
				</Link>
			</div>
		</>
	);
}

export default function Home() {
	return (
		<>
			<div className="relative h-full ">
				<div className="absolute flex h-full w-full justify-center">
					<div className="bg-grid fixed z-0 h-full w-full"></div>
					<div className="bg-conic fixed z-10 h-full w-full"></div>
				</div>
				<div className="relative z-30 mx-8 grid grid-cols-2 gap-5 pb-20 pt-[80px] lg:mx-40 lg:grid-cols-3 ">
					<div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-5 lg:col-span-3 lg:grid-cols-6 lg:grid-rows-1">
						<div className="entry col-span-2 space-y-2 rounded-xl border border-border/10 bg-background p-10 lg:col-span-3">
							<h1 className="text-xl lg:text-4xl">
								hi, i&apos;m{" "}
								<span className="font-bold">ekas</span>
							</h1>
							<p className="text-sm lg:text-xl">
								I work with computers, building software and web
								experiences. Open to new projects and
								collaborations.
							</p>
						</div>
						<GridTile className="col-span-1 flex gap-2 lg:col-span-2 lg:grid-cols-2 lg:grid-rows-1 lg:text-3xl">
							<LocationIcon /> Vancouver
						</GridTile>
						<Suspense
							fallback={
								<GridTile className="bg-muted/70 ">
									<LoadingIcon className="animate-spin" />
								</GridTile>
							}
						>
							<SpotifyTile className="" />
						</Suspense>
					</div>
					<div className="col-span-2 flex items-center justify-center space-y-2 rounded-xl border border-border/10 bg-background p-4 lg:col-span-1 lg:row-span-2 lg:p-10">
						<h1 className="lg:text-4xl">Building blocks</h1>
					</div>
					<div className="col-span-2 grid grid-cols-4 gap-5 lg:col-span-2 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-2">
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
					<div className="col-span-2 flex items-center justify-center space-y-2 rounded-xl border border-border/10 bg-background p-10 lg:col-span-1 lg:row-span-2">
						<h1 className="lg:text-4xl">Experiments</h1>
					</div>
					<div className="col-span-2 grid gap-5 lg:col-span-2 lg:row-span-2 lg:grid-cols-4 lg:grid-rows-2">
						<GridTile className="row-span-2 flex-col space-y-1 text-center transition duration-200 ease-in-out hover:cursor-pointer hover:border-foreground lg:p-4">
							<Link
								href="https://github.com/ekasc/kissland.nvim.git"
								target="_blank"
							>
								<h1 className="text-lg font-bold text-green-500">
									kissland.nvim
								</h1>
								<p>kissland inspired neovim color-scheme</p>
							</Link>
						</GridTile>
						<GridTile className="row-span-2 flex-col space-y-1 text-center transition duration-200 ease-in-out hover:cursor-pointer hover:border-foreground lg:p-4">
							<Link
								href="https://github.com/ekasc/portfolio.git"
								target="_blank"
							>
								<h1 className="text-lg font-bold text-green-500">
									Portfolio
								</h1>
								<p>Portfolio built with Next.js</p>
							</Link>
						</GridTile>
						<div className="rounded-xl lg:col-span-2 lg:row-span-2">
							<div className="group relative">
								<div className="grid grid-cols-2 gap-5 border-border/10 ">
									<GridTile className=" flex-col space-y-1 text-center transition duration-200 ease-in-out hover:cursor-pointer hover:border-foreground lg:p-4">
										<Link href="#">
											<h1 className="text-lg font-bold text-green-500">
												Palette
											</h1>
											<p>
												Building a color palette has
												never been easier
											</p>
										</Link>
									</GridTile>
									<GridTile className="flex-col space-y-1 text-center transition duration-200 ease-in-out hover:cursor-pointer hover:border-foreground lg:p-4">
										<Link href="#">
											<h1 className="text-lg font-bold text-green-500">
												refuge-go
											</h1>
											<p>Backup tool built with Go</p>
										</Link>
									</GridTile>
								</div>
								<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-xl border border-border/10 bg-muted/90 p-10 transition duration-[400ms] ease-in-out group-hover:opacity-0">
									<div>
										<UnderConstructionIcon />
									</div>
									<h1 className="lg:text-3xl ">
										under construction
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-2 flex items-center justify-center rounded-xl border border-border/10 bg-background p-10 lg:col-span-3 lg:row-span-2">
						<h1 className="lg:text-3xl">
							Don&apos;t hesitate to reach out – let&apos;s
							connect and make things happen!
						</h1>
					</div>
					<Link href="mailto:ekas.esc@gmail.com">
						<GridTile className="transition duration-200 ease-in-out hover:border-foreground">
							<EmailIcon />
						</GridTile>
					</Link>
					<Link href="https://github.com/ekasc" target="_blank">
						<GridTile className="transition duration-200 ease-in-out hover:border-foreground">
							<GithubIcon />
						</GridTile>
					</Link>
					<Link
						href="https://twitter.com/ekascs"
						target="_blank"
						className="col-span-2 lg:col-span-1"
					>
						<GridTile className="col-span-2 transition duration-200 ease-in-out hover:border-foreground lg:col-span-1">
							<TwitterIcon />
						</GridTile>
					</Link>
					<GridTile className="col-span-2 text-sm lg:col-span-3 lg:text-lg">
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
