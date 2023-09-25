import { FaCheckCircle } from "react-icons/fa";
import styles from "./TabItem.module.scss";

type TabItemType = {
	id: number;
	title: string;
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabItem = ({ id, title, activeTab, setActiveTab }: TabItemType) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<li className={styles.container}>
			<article
				onClick={handleClick}
				className={activeTab === id ? `${styles.active}` : `${styles.inactive}`}
			>
				<h1 className={styles.title}>{title}</h1>
				<figure className={styles.checked__icon}>
					<FaCheckCircle />
				</figure>
			</article>
		</li>
	);
};
export default TabItem;
