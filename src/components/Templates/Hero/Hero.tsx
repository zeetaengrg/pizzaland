"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";
import { imgSlider } from "@/data/slider-data";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { OrderBtn } from "@/components/elements";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleArrow = (direction: string) => {
		if (direction === "left") {
			setCurrentSlide(
				currentSlide > 0 ? currentSlide - 1 : imgSlider.length - 1
			);
		} else {
			setCurrentSlide(
				currentSlide < imgSlider.length - 1 ? currentSlide + 1 : 0
			);
		}
	};

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) =>
					prev === imgSlider.length - 1 ? 0 : prev + 1
				),
			6000
		);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<section className={styles.container}>
			<section className={styles.top}>
				<section
					className={styles.wrapper}
					style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
				>
					{imgSlider.map((img) => (
						<article className={styles.slider} key={img.id}>
							<figcaption className={styles.slider__desc}>
								<h1 className={styles.title}>{img.title}</h1>
								<p className={styles.subtitle}>{img.subtitle}</p>
								<div className={styles.btn__order}>
									<OrderBtn text="Order Now" href="menu" />
								</div>
							</figcaption>
							<figure className={styles.slider__img}>
								<Image
									src={img.img}
									alt="Pizza"
									height={550}
									width={950}
									objectFit="contain"
									priority
								/>
							</figure>
						</article>
					))}
				</section>
			</section>
			<section className={styles.bottom}>
				<figure className={styles.arrow__left}>
					<MdArrowBackIosNew
						className={styles.arrow}
						onClick={() => handleArrow("left")}
					/>
				</figure>
				{imgSlider.map((item) => {
					return (
						<figure
							className={
								currentSlide === item.id - 1
									? `${styles.dot}`
									: `${styles.dot} ${styles.active}`
							}
							key={item.id}
							onClick={() => setCurrentSlide(item.id - 1)}
						></figure>
					);
				})}
				<figure className={styles.arrow__right}>
					<MdArrowForwardIos
						className={styles.arrow}
						onClick={() => handleArrow("right")}
					/>
				</figure>
			</section>
		</section>
	);
};

export default Hero;
