import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Notification from "@/components/Notification/Notification";

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
