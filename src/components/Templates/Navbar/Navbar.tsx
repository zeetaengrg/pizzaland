import React from "react";
import styles from "./Navbar.module.scss";
import { FaPhone } from "react-icons/fa";
import { ActiveLink } from "@/components/Elements";

type LinksType = {
	id: number;
	url: string;
	title: string;
};

const leftLinks: LinksType[] = [
	{ id: 1, url: "/", title: "Home" },
	{ id: 2, url: "/menu", title: "Menu" },
];

const rightLinks: LinksType[] = [
	{ id: 1, url: "/#locations", title: "Locations" },
	{ id: 2, url: "/contact-us", title: "Contact Us" },
];

const Navbar = () => {
	return (
		<header className={styles.container}>
			<figure className={styles.left}>
				<FaPhone fontSize="1.5rem" />
				<figcaption className={styles.left__info}>
					<h1>Order Now!</h1>
					<span>+01 234 567 89</span>
				</figcaption>
			</figure>
			<nav className={styles.center} aria-label="primary-navigation">
				<ul>
					{leftLinks.map((link: LinksType) => (
						<li key={link.id}>
							<ActiveLink url={link.url} title={link.title} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
