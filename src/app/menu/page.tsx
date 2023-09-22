import { Header } from "@/components/elements";
import styles from "./MenuPage.module.scss";
import { Sidebar } from "@/components/templates";

const MenuPage = () => {
	return (
		<section className={styles.container}>
			<Header
				title="Our Menu"
				subtitle="Various Regional Taste"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
			/>
			<section className={styles.content}>
				<Sidebar />
			</section>
		</section>
	);
};

export default MenuPage;
