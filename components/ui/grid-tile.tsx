import { cn } from "@/lib/utils";

export function GridTile({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex items-center justify-center rounded-xl border border-border/10 bg-background lg:p-12 p-4",
				className,
			)}
		>
			{children}
		</div>
	);
}
