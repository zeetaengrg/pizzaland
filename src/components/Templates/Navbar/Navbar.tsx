import React from "react";
import styles from "./Navbar.module.scss";
import { FaPhone } from "react-icons/fa";
import { ActiveLink } from "@/components/Elements";
import Link from "next/link";
import {
	MdAccountCircle,
	MdOutlineKeyboardArrowDown,
	MdOutlineShoppingCart,
} from "react-icons/md";

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
			{/* CONTACT INFO */}
			<figure className={styles.left}>
				<FaPhone fontSize="1.5rem" />
				<figcaption className={styles.left__info}>
					<h1>Order Now!</h1>
					<span>+01 234 567 89</span>
				</figcaption>
			</figure>
			{/* NAVBAR LINKS */}
			<nav className={styles.center} aria-label="primary-navigation">
				{/* LEFT SIDE LINKS */}
				<ul>
					{leftLinks.map((link: LinksType) => (
						<li key={link.id}>
							<ActiveLink url={link.url} title={link.title} />
						</li>
					))}
				</ul>
				{/* LOGO */}
				<ul>
					<Link href="/" passHref>
						<h1>PizzaLand</h1>
					</Link>
				</ul>
				{/* RIGHT SIDE LINKS */}
				<ul>
					{rightLinks.map((link: LinksType) => (
						<li key={link.id}>
							<ActiveLink url={link.url} title={link.title} />
						</li>
					))}
				</ul>
			</nav>
			{/* USER ACCOUNT & CART SECTION */}
			<section className={styles.right}>
				<section className={styles.right__account}>
					<button className={styles.btn__link}>
						<MdAccountCircle className={styles.icon} />
						<MdOutlineKeyboardArrowDown />
					</button>
					<article className={styles.dropdown__menu}>
						<div className={styles.triangle}></div>
						<Link href="/login" passHref>
							Login
						</Link>
						<hr />
						<Link href="/register" passHref>
							Register
						</Link>
					</article>
				</section>
				<section className={styles.right__cart}>
					<Link href="/cart" passHref>
						<MdOutlineShoppingCart className={styles.icon} />
					</Link>
					{/* {totalQuantity > 0 && ( */}
					<span className={styles.quantity}>3</span>
					{/* )} */}
				</section>
				{/* <MobileNavbar /> */}
			</section>
		</header>
	);
};

export default Navbar;
