"use client";

import { ChangeEvent, useState } from "react";
import styles from "./Sidebar.module.scss";
import { pizzaList } from "@/data/pizzalist-data";

const allCategories = [
	"All",
	...new Set(pizzaList.map((pizza) => pizza.category)),
];

const Sidebar = () => {
	const [selectedCategory, setSelectedCategory] = useState(allCategories);
	const [input, setInput] = useState("20");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<section className={styles.sidebar}>
			<form role="search" className={styles.search}>
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleSearchTerm}
				/>
			</form>
			<section className={styles.category}>
				<h3>Categories</h3>
				<ul>
					{allCategories.sort().map((category) => (
						<button
							key={category}
							className={
								selectedCategory === category
									? styles.btn__active
									: styles.btn__inactive
							}
						>
							{category}
						</button>
					))}
				</ul>
			</section>
			<section className={styles.price}>
				<h3>Price</h3>
				<form role="price">
					<label htmlFor="price">$5 - ${input}</label>
					<input
						type="range"
						name="price"
						id="price"
						value={input}
						min="5"
						max="20"
						onChange={handleChange}
					/>
				</form>
			</section>
		</section>
	);
};

export default Sidebar;
