import Link from "next/link";
import Image from "next/image";
// import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

// import { addProduct } from "redux/cartSlice";
import { Ratings, AddToCartBtn } from "@/components/elements";
import styles from "./ProductCard.module.scss";

type PizzaType = {
	id: number;
	title: string;
	img: string;
	description: string;
	topppings?: {
		id: number;
		text: string;
		price: number;
	}[];
	prices: number[];
	rating: number;
	reviews: number;
	category: string;
};

const ProductCard = ({
	id,
	title,
	img,
	description,
	topppings,
	prices,
	rating,
	reviews,
	category,
}: PizzaType) => {
	// const dispatch = useDispatch();

	// const handleAddToCart = () => {
	//   dispatch(
	//     addProduct({
	//       ...pizza,
	//       price: pizza.prices[0],
	//       size: 0,
	//       quantity: 1,
	//       totalPrice: pizza.prices[0] * 1,
	//     })
	//   );
	// };

	return (
		<section className={styles.container}>
			<figure className={styles.wrapper__img}>
				<Image src={img} alt={title} height="200" width="200" priority />
				<figcaption className={styles.overlap}>
					<Link href={`/product/${id}`} passHref>
						<FaSearch className={styles.icon} />
					</Link>
				</figcaption>
			</figure>
			<section className={styles.info}>
				<Ratings rating={rating} />
				<p className={styles.info__reviews}>
					<a href="#">({reviews} Reviews)</a>
				</p>
				<article className={styles.info__text}>
					{title.length > 18 ? (
						<h3>
							<p className={styles.tooltip}>{title}</p>
							{title.slice(0, 16)}...
						</h3>
					) : (
						<h3>{title}</h3>
					)}
					{description.length > 50 ? (
						<p className={styles.desc}>{description.slice(0, 50)}...</p>
					) : (
						<p className={styles.desc}>{description}</p>
					)}
				</article>
				<section className={styles.info__bottom}>
					<p className={styles.price}>${prices[0].toFixed(2)}</p>
					<article className={styles.btn__cart}>
						<AddToCartBtn text="+" />
					</article>
				</section>
			</section>
		</section>
	);
};
export default ProductCard;
