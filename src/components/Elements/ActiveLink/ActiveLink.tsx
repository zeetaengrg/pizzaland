"use client";

import Link from "next/link";
import styles from "./ActiveLink.module.scss";
// import { useRouter } from "next/navigation";

type LinkProps = {
	url: string;
	title: string;
};

const ActiveLink = ({ url, title }: LinkProps) => {
	// const router = useRouter();

	// const style = {
	// 	color:
	// 		router.asPath === url && url !== "/"
	// 			? "hsl(200, 19%, 18%)"
	// 			: "hsl(0, 65%, 51%)",
	// };

	return (
		<Link href={url} className={styles.center__links} passHref>
			{title}
		</Link>
	);
};

export default ActiveLink;
