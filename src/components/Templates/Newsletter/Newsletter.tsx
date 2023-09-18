"use client";

import { Header } from "@/components/elements";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
	return (
		<section className={styles.container}>
			<Header
				title="Subscribe to Newsletter"
				subtitle="Get Discounts and Benefits"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
			/>
			<section className={styles.newsletter}>
				<form>
					<input type="email" placeholder="Enter Your Email" />
					<button onClick={(e) => e.preventDefault()}>Send</button>
				</form>
			</section>
		</section>
	);
};
export default Newsletter;
