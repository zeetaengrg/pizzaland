import { ReactNode } from "react";
import styles from "./TabContent.module.scss";

type TabContentType = {
	id: number;
	activeTab: number;
	children: ReactNode;
};

const TabContent = ({ id, activeTab, children }: TabContentType) => {
	return activeTab === id ? (
		<section className={styles.container}>{children}</section>
	) : null;
};

export default TabContent;
