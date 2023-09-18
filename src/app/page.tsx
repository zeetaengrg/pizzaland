import { About, Hero, Popular } from "@/components/templates";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<About />
			<Popular />
		</main>
	);
}
