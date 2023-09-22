"use client";

import { ChangeEvent, useState } from "react";
import styles from "./Sidebar.module.scss";
import { pizzaList } from "@/data/pizzalist-data";

// type PizzaListType = {
// 	id: number;
// 	title: string;
// 	img: string;
// 	description: string;
// 	toppings: {
// 		id: number;
// 		text: string;
// 		price: number;
// 	}[];
// 	prices: [number];
// 	rating: number;
// 	reviews: number;
// 	category: string;
// }[];

const allCategories = [
	"All",
	...new Set(pizzaList.map((pizza) => pizza.category)),
];

const Sidebar = () => {
	const [selectedCategory, setSelectedCategory] = useState(allCategories);
	const [input, setInput] = useState("20");

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
					// value={searchTerm}
					// onChange={(e) => setSearchTerm(e.target.value)}
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
					{/* {allCategories.sort().map((category) => (
						<button
							key={category}
							className={
								selectedCategory === category
									? styles.btn__active
									: styles.btn__inactive
							}
							onClick={() => {
								filterItemsByCategory(category);
								setSelectedCategory(category);
							}}
						>
							{category}
						</button>
					))} */}
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
						// onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						// 	setInput(e.target.value);
						// 	// filterItemsByPrice(e.target.value);
						// }}
						onChange={handleChange}
					/>
				</form>
			</section>
		</section>
	);
};

export default Sidebar;
