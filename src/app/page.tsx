import {
	About,
	Hero,
	Locations,
	Newsletter,
	Popular,
	Testimonials,
} from "@/components/templates";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<About />
			<Popular />
			<Locations />
			<Testimonials />
			<Newsletter />
		</main>
	);
}
