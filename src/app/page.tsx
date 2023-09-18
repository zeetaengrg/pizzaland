import { Hero } from "@/components/Templates";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
		</main>
	);
}
