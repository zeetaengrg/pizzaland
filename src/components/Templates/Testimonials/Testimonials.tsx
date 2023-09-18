"use client";

import Image from "next/image";
import { useState } from "react";
import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
	FaMinus,
} from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Header } from "@/components/elements";
import { testimonialsData } from "@/data/testimonials-data";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleArrow = (direction: string) => {
		if (direction === "left") {
			setCurrentSlide(
				currentSlide > 0 ? currentSlide - 1 : testimonialsData.length - 1
			);
		} else {
			setCurrentSlide(
				currentSlide < testimonialsData.length - 1 ? currentSlide + 1 : 0
			);
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Header
					title="Testimonials"
					subtitle="What Our Customers Say"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
				/>
			</div>
			<div className={styles.testimonials}>
				<div className={styles.testimonials__left}>
					<FaArrowAltCircleLeft
						className={styles.arrow}
						onClick={() => handleArrow("left")}
					/>
				</div>
				<div
					className={styles.testimonials__wrapper}
					style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
				>
					{testimonialsData.map((testimonial) => (
						<article key={testimonial.id} className={styles.slider}>
							<figure className={styles.img}>
								<Image
									src={testimonial.img}
									alt={testimonial.title}
									height={70}
									width={70}
								/>
							</figure>
							<div className={styles.info}>
								<p>
									<RiDoubleQuotesL />
									{testimonial.description}
									<RiDoubleQuotesR />
								</p>
								<h3>
									<FaMinus />
									{testimonial.title}
								</h3>
							</div>
						</article>
					))}
				</div>
				<div className={styles.testimonials__right}>
					<FaArrowAltCircleRight
						className={styles.arrow}
						onClick={() => handleArrow("right")}
					/>
				</div>
			</div>
		</section>
	);
};
export default Testimonials;
