import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ekasc",
	description: "Portfolio of ekasc made with Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn("dark overscroll-y-none", karla.className)}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
