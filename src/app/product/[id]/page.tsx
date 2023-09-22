"use client";

import { singleProduct } from "@/data/pizzalist-data";
import Image from "next/image";
import styles from "./ProductPage.module.scss";
import { AddToCartBtn, Ratings } from "@/components/elements";
import { sizeItems } from "@/data/size-data";
import {
	MdAddCircleOutline,
	MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { useState } from "react";

const ProductPage = () => {
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(singleProduct.prices[0]);
	const [size, setSize] = useState(0);

	const handleAdd = () => {
		setQuantity(quantity + 1);
	};

	const handleMinus = () => {
		if (quantity <= 1) {
			setQuantity(1);
		} else {
			setQuantity(quantity - 1);
		}
	};

	const handlePrice = (number: number) => {
		setPrice(price + number);
	};

	const handleSize = (sizeIndex: number) => {
		const difference =
			singleProduct.prices[sizeIndex] - singleProduct.prices[size];
		setSize(sizeIndex);
		handlePrice(difference);
	};

	return (
		<section className={styles.product__container} id="product-content">
			{singleProduct.img && (
				<figure className={styles.product__container__left}>
					<Image
						src={singleProduct.img}
						alt={singleProduct.title}
						height="500"
						width="500"
						priority
					/>
				</figure>
			)}
			<section
				className={styles.product__container__right}
				aria-labelledby="product-information"
			>
				<h1 id="product-information">{singleProduct.title}</h1>
				<div className={styles.review}>
					<Ratings rating={singleProduct.rating} />
					<a href="#reviews">({singleProduct.reviews} Reviews)</a>
				</div>
				<span className={styles.price}>$ {price.toFixed(2)}</span>
				<p className={styles.description}>{singleProduct.description}</p>
				<section aria-labelledby="choose-size" className={styles.size}>
					<h2 id="choose-size">Choose Your Size</h2>
					<article className={styles.size__wrapper}>
						{sizeItems.map((item) => (
							<div
								className={styles.img__wrapper}
								key={item.id}
								onClick={() => handleSize(item.id - 1)}
							>
								<figure className={styles.img}>
									<Image
										src={item.image}
										alt={item.title}
										height={item.height}
										width={item.width}
									/>
								</figure>
								<figcaption className={styles.info}>
									<p className={styles.info__title}>{item.title}</p>
								</figcaption>
							</div>
						))}
					</article>
				</section>
				<section
					aria-labelledby="add-extra-topping"
					className={styles.toppings}
				>
					<h3 id="add-extra-topping">Add Extra Toppings</h3>
					<form className={styles.toppings__wrapper}>
						{singleProduct.toppings.map((topping) => (
							<label key={topping.id} className={styles.box}>
								<p>
									{topping.text} (${topping.price})
								</p>
								<input
									type="checkbox"
									id={topping.text}
									name={topping.text}
									// onChange={(e) => handleChange(e, topping)}
								/>
								<span className={styles.checkmark}></span>
							</label>
						))}
					</form>
				</section>
				<article className={styles.bottom}>
					<div className={styles.counter}>
						<MdOutlineRemoveCircleOutline
							className={styles.count__btn}
							onClick={handleMinus}
						/>
						<span className={styles.count__num}>{quantity}</span>
						<MdAddCircleOutline
							className={styles.count__btn}
							onClick={handleAdd}
						/>
					</div>
					<div className={styles.bottom__cart}>
						{/* <div className={styles.bottom__cart} onClick={handleAddToCart}> */}
						<AddToCartBtn text="Add To Cart" />
					</div>
				</article>
			</section>
		</section>
	);
};

export default ProductPage;
