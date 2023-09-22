type ProductType = {
	id: number;
	title: string;
	img: string;
	description: string;
	toppings: { id: number; text: string; price: number }[];
	prices: number[];
	rating: number;
	reviews: number;
	category: string;
};

type ProductsType = ProductType[];

export const featuredProduct: ProductsType = [
	{
		id: 1,
		title: "Greek Pizza",
		img: "/images/Greek-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				id: 1,
				text: "Artichokes",
				price: 2,
			},
			{
				id: 2,
				text: "Kalamata Olives",
				price: 2.5,
			},
			{
				id: 3,
				text: "Feta Cheese",
				price: 2,
			},
			{
				id: 4,
				text: "Oregano",
				price: 1.5,
			},
			{
				id: 5,
				text: "Tomato Sauce",
				price: 1,
			},
		],
		prices: [11.99, 12.99, 13.99],
		rating: 5,
		reviews: 256,
		category: "Greek",
	},
	{
		id: 2,
		title: "Pizza Alla Diavola",
		img: "/images/Pizza-Alla-Diavola.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				id: 1,
				text: "Hot Chilli Peppers",
				price: 1.5,
			},
			{
				id: 2,
				text: "Spicy Salami",
				price: 3,
			},
			{
				id: 3,
				text: "Mozzarella Cheese",
				price: 2.5,
			},
			{
				id: 4,
				text: "Tomato Sauce",
				price: 1,
			},
		],
		prices: [14.99, 15.99, 16.99],
		rating: 4.5,
		reviews: 124,
		category: "Italian",
	},
	{
		id: 3,
		title: "Quattro Stagioni Pizza",
		img: "/images/Quattro-Stagioni-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				id: 1,
				text: "Artichokes",
				price: 2.5,
			},
			{
				id: 2,
				text: "Olives",
				price: 1.5,
			},
			{
				id: 3,
				text: "Mushrooms",
				price: 1.5,
			},
			{
				id: 4,
				text: "Prosciutto Cotto",
				price: 2.5,
			},
			{
				id: 5,
				text: "Mozzarella Cheese",
				price: 2,
			},
			{
				id: 6,
				text: "Tomato Sauce",
				price: 1,
			},
		],
		prices: [14.99, 15.99, 16.99],
		rating: 4.5,
		reviews: 96,
		category: "Italian",
	},
	{
		id: 4,
		title: "Prosciutto E Unghi Pizza",
		img: "/images/Prosciutto-E-Unghi-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				id: 1,
				text: "Mushrooms",
				price: 1.5,
			},
			{
				id: 2,
				text: "Prosciutto Cotto",
				price: 2.5,
			},
			{
				id: 3,
				text: "Mozzarella Cheese",
				price: 2,
			},
			{
				id: 4,
				text: "Tomato Sauce",
				price: 1,
			},
		],
		prices: [12.99, 13.99, 14.99],
		rating: 4.5,
		reviews: 84,
		category: "Italian",
	},
	{
		id: 5,
		title: "Pizza Margherita",
		img: "/images/Pizza-Margherita.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Basil",
				price: 1,
				id: 1,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 2,
			},
			{
				text: "Fior Di Latte",
				price: 3,
				id: 1,
			},
			{
				text: "Tomato Sauce",
				price: 4,
				id: 1,
			},
		],
		prices: [9.99, 10.99, 11.99],
		rating: 4.5,
		reviews: 456,
		category: "Italian",
	},
	{
		id: 6,
		title: "Pizza Quattro Formaggi",
		img: "/images/Pizza-Quattro-Formaggi.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Fontina Cheese",
				price: 2,
				id: 1,
			},
			{
				text: "Gorgonzola",
				price: 2.5,
				id: 2,
			},
			{
				text: "Mozzarella Di Bufala",
				price: 2,
				id: 3,
			},
			{
				text: "Grana Padano Cheese",
				price: 2,
				id: 4,
			},
		],
		prices: [12.99, 13.99, 14.99],
		rating: 4.5,
		reviews: 164,
		category: "Italian",
	},
	{
		id: 7,
		title: "Quattro Stagioni Pizza",
		img: "/images/Quattro-Stagioni-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Artichokes",
				price: 2.5,
				id: 1,
			},
			{
				text: "Olives",
				price: 1.5,
				id: 2,
			},
			{
				text: "Mushrooms",
				price: 1.5,
				id: 3,
			},
			{
				text: "Prosciutto Cotto",
				price: 2.5,
				id: 4,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 5,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 6,
			},
		],
		prices: [14.99, 15.99, 16.99],
		rating: 4.5,
		reviews: 96,
		category: "Italian",
	},
];

export const pizzaList: ProductsType = [
	{
		id: 1,
		title: "Greek Pizza",
		img: "/images/Greek-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Artichokes",
				price: 2,
				id: 1,
			},
			{
				text: "Kalamata Olives",
				price: 2.5,
				id: 2,
			},
			{
				text: "Feta Cheese",
				price: 2,
				id: 3,
			},
			{
				text: "Oregano",
				price: 1.5,
				id: 4,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 5,
			},
		],
		prices: [11.99, 12.99, 13.99],
		rating: 5,
		reviews: 256,
		category: "Greek",
	},
	{
		id: 2,
		title: "Pizza Alla Diavola",
		img: "/images/Pizza-Alla-Diavola.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Hot Chilli Peppers",
				price: 1.5,
				id: 1,
			},
			{
				text: "Spicy Salami",
				price: 3,
				id: 2,
			},
			{
				text: "Mozzarella Cheese",
				price: 2.5,
				id: 3,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 4,
			},
		],
		prices: [14.99, 15.99, 16.99],
		rating: 4.5,
		reviews: 124,
		category: "Italian",
	},
	{
		id: 3,
		title: "Quattro Stagioni Pizza",
		img: "/images/Quattro-Stagioni-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Artichokes",
				price: 2.5,
				id: 1,
			},
			{
				text: "Olives",
				price: 1.5,
				id: 2,
			},
			{
				text: "Mushrooms",
				price: 1.5,
				id: 3,
			},
			{
				text: "Prosciutto Cotto",
				price: 2.5,
				id: 4,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 5,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 6,
			},
		],
		prices: [14.99, 15.99, 16.99],
		rating: 4.5,
		reviews: 96,
		category: "Italian",
	},
	{
		id: 4,
		title: "Prosciutto E Unghi Pizza",
		img: "/images/Prosciutto-E-Unghi-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Mushrooms",
				price: 1.5,
				id: 1,
			},
			{
				text: "Prosciutto Cotto",
				price: 2.5,
				id: 2,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 3,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 4,
			},
		],
		prices: [12.99, 13.99, 14.99],
		rating: 4.5,
		reviews: 84,
		category: "Italian",
	},
	{
		id: 5,
		title: "Pizza Ai Frutti Di Mare",
		img: "/images/Pizza-Ai-Frutti-Di-Mare.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Scampi",
				price: 3.5,
				id: 1,
			},
			{
				text: "Mussels",
				price: 3,
				id: 2,
			},
			{
				text: "Squid",
				price: 3,
				id: 3,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 4,
			},
		],
		prices: [15.99, 16.99, 17.99],
		rating: 4,
		reviews: 56,
		category: "Italian",
	},
	{
		id: 6,
		title: "Pizza Capricciosa",
		img: "/images/Pizza-Capricciosa.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Olives",
				price: 1.5,
				id: 1,
			},
			{
				text: "Artichokes",
				price: 2.5,
				id: 2,
			},
			{
				text: "Mushrooms",
				price: 1.5,
				id: 3,
			},
			{
				text: "Prosciutto Cotto",
				price: 2.5,
				id: 4,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 5,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 6,
			},
		],
		prices: [13.99, 14.99, 15.99],
		rating: 4,
		reviews: 78,
		category: "Italian",
	},
	{
		id: 7,
		title: "Pizza Margherita",
		img: "/images/Pizza-Margherita.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Basil",
				price: 1,
				id: 1,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 2,
			},
			{
				text: "Fior Di Latte",
				price: 2,
				id: 3,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 4,
			},
		],
		prices: [9.99, 10.99, 11.99],
		rating: 4.5,
		reviews: 456,
		category: "Italian",
	},
	{
		id: 8,
		title: "Pizza Primavera",
		img: "/images/Pizza-Primavera.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Parmesan Cheese Shavings",
				price: 2,
				id: 1,
			},
			{
				text: "Arugula",
				price: 1.5,
				id: 2,
			},
			{
				text: "Cherry Tomatoes",
				price: 1.5,
				id: 3,
			},
			{
				text: "Prosciutto Crudo",
				price: 1,
				id: 4,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 5,
			},
		],
		prices: [11.99, 12.99, 13.99],
		rating: 4,
		reviews: 56,
		category: "Italian",
	},
	{
		id: 9,
		title: "Pizza Quattro Formaggi",
		img: "/images/Pizza-Quattro-Formaggi.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Fontina Cheese",
				price: 2,
				id: 1,
			},
			{
				text: "Gorgonzola",
				price: 2.5,
				id: 2,
			},
			{
				text: "Mozzarella Di Bufala",
				price: 2,
				id: 3,
			},
			{
				text: "Grana Padano Cheese",
				price: 2,
				id: 4,
			},
		],
		prices: [12.99, 13.99, 14.99],
		rating: 4.5,
		reviews: 164,
		category: "Italian",
	},
	{
		id: 10,
		title: "Pizza Vegetariana",
		img: "/images/Pizza-Vegetariana.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Olive Oil",
				price: 1,
				id: 1,
			},
			{
				text: "Zucchini",
				price: 2,
				id: 2,
			},
			{
				text: "Eggplant",
				price: 2,
				id: 3,
			},
			{
				text: "Peppers",
				price: 1,
				id: 4,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 5,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 6,
			},
		],
		prices: [10.99, 11.99, 12.99],
		rating: 4,
		reviews: 74,
		category: "Italian",
	},
	{
		id: 11,
		title: "Pugliese Pizza",
		img: "/images/Pugliese-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Onion Rings",
				price: 1.5,
				id: 1,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 2,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 3,
			},
		],
		prices: [13.99, 14.99, 15.99],
		rating: 4,
		reviews: 38,
		category: "Italian",
	},
	{
		id: 12,
		title: "New York Style Pizza",
		img: "/images/New-York-Style-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 1,
			},
			{
				text: "Olive Oil",
				price: 1,
				id: 2,
			},
			{
				text: "Oregano",
				price: 1.5,
				id: 3,
			},
			{
				text: "Crushed Red Pepper",
				price: 1,
				id: 4,
			},
			{
				text: "Basil",
				price: 1,
				id: 5,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 6,
			},
		],
		prices: [11.99, 12.99, 13.99],
		rating: 4.5,
		reviews: 147,
		category: "American",
	},
	{
		id: 13,
		title: "Detroit Style Pizza",
		img: "/images/Detroit-Style-Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Pepperoni",
				price: 2,
				id: 1,
			},
			{
				text: "Mozzarella Cheese",
				price: 2,
				id: 2,
			},
			{
				text: "Tomato Sauce",
				price: 1,
				id: 3,
			},
		],
		prices: [12.99, 13.99, 14.99],
		rating: 4,
		reviews: 120,
		category: "American",
	},
	{
		id: 14,
		title: "Bacon Potato Pizza",
		img: "/images/Bacon Potato Pizza.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Roasted Gold Potatoes",
				price: 2.5,
				id: 1,
			},
			{
				text: "Smoked Bacon",
				price: 2,
				id: 2,
			},
			{
				text: "Green Onions",
				price: 1.5,
				id: 3,
			},
			{
				text: "Ranch Dressing",
				price: 1.5,
				id: 4,
			},
		],
		prices: [16.5, 24.25, 32.95],
		rating: 4,
		reviews: 97,
		category: "American",
	},
	{
		id: 15,
		title: "Creamy Pesto Chicken",
		img: "/images/Creamy Pesto Chicken.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Roasted Chicken",
				price: 3,
				id: 1,
			},
			{
				text: "Red Onions",
				price: 1.5,
				id: 2,
			},
			{
				text: "Green Peppers",
				price: 2,
				id: 3,
			},
			{
				text: "Red Peppers",
				price: 2,
				id: 4,
			},
			{
				text: "Parmesan Cheese",
				price: 2.5,
				id: 5,
			},
			{
				text: "Pesto Sauce",
				price: 1.5,
				id: 6,
			},
		],
		prices: [17.7, 26.05, 35.3],
		rating: 4.5,
		reviews: 210,
		category: "American",
	},
	{
		id: 16,
		title: "Athena",
		img: "/images/Athena.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Mushroom",
				price: 2,
				id: 1,
			},
			{
				text: "Red Onions",
				price: 1.5,
				id: 2,
			},
			{
				text: "Feta Cheese",
				price: 2,
				id: 3,
			},
			{
				text: "Tomato",
				price: 1.5,
				id: 4,
			},
			{
				text: "Basil",
				price: 1,
				id: 5,
			},
		],
		prices: [15.5, 22.6, 29.6],
		rating: 4,
		reviews: 152,
		category: "Greek",
	},
	{
		id: 17,
		title: "Westerner",
		img: "/images/Westerner.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Roasted Chicken",
				price: 3,
				id: 1,
			},
			{
				text: "Barbecue Sauce",
				price: 1.5,
				id: 2,
			},
			{
				text: "Mozarella Cheese",
				price: 2,
				id: 3,
			},
			{
				text: "Tomato",
				price: 1.5,
				id: 4,
			},
			{
				text: "Cilantro",
				price: 1,
				id: 5,
			},
		],
		prices: [17.7, 26.05, 35.3],
		rating: 4,
		reviews: 49,
		category: "Miscellaneous",
	},
	{
		id: 18,
		title: "Steakhouse",
		img: "/images/Steakhouse.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
		toppings: [
			{
				text: "Seasoned Steak",
				price: 3,
				id: 1,
			},
			{
				text: "Spinach",
				price: 1.5,
				id: 2,
			},
			{
				text: "Mushroom",
				price: 2,
				id: 3,
			},
			{
				text: "Balsamic Roasted Onion",
				price: 1.5,
				id: 4,
			},
			{
				text: "Truffle Oil",
				price: 2,
				id: 5,
			},
		],
		prices: [17.7, 26.05, 35.3],
		rating: 3.5,
		reviews: 72,
		category: "Miscellaneous",
	},
];

export const singleProduct: ProductType = {
	id: 1,
	title: "Greek Pizza",
	img: "/images/Greek-Pizza.png",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt voluptatibus ab magnam hic facere dolor voluptates corrupti id delectus facilis explicabo veniam optio.",
	toppings: [
		{
			id: 1,
			text: "Artichokes",
			price: 2,
		},
		{
			id: 2,
			text: "Kalamata Olives",
			price: 2.5,
		},
		{
			id: 3,
			text: "Feta Cheese",
			price: 2,
		},
		{
			id: 4,
			text: "Oregano",
			price: 1.5,
		},
		{
			id: 5,
			text: "Tomato Sauce",
			price: 1,
		},
	],
	prices: [11.99, 12.99, 13.99],
	rating: 5,
	reviews: 256,
	category: "Greek",
};
