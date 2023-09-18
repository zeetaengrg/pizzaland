import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar, Notification } from "@/components/templates";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PizzaLand || A platform to order pizza of your choice",
	description:
		"This is a food delivery platform where you can order food and get it delivered at your doorstep",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Notification />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
