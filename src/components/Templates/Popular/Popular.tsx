import { Header, OrderBtn, ProductCard } from "@/components/elements";
import styles from "./Popular.module.scss";
import { pizzaList } from "@/data/pizzalist-data";

const Popular = () => {
	return (
		<section className={styles.container}>
			<Header
				title="Popular Choices"
				subtitle="What Our Customers Love"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
			/>
			<section className={styles.container__products}>
				{pizzaList
					.slice(0, 10)
					.map(
						(pizza) =>
							pizza.rating >= 4.5 && <ProductCard key={pizza.id} {...pizza} />
					)}
			</section>
			<OrderBtn text="See All Menu" href="menu" />
		</section>
	);
};
export default Popular;
