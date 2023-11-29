import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export function GridTile({ children, className }: GridProps) {
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
