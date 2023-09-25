import Link from "next/link";
import styles from "./AuthenticationLink.module.scss";

type AuthenticationLinkType = {
	linkDescription: string;
	linkName: string;
};

const AuthenticationLink = ({
	linkDescription,
	linkName,
}: AuthenticationLinkType) => {
	return (
		<article className={styles.container}>
			<p>{linkDescription}</p>
			<Link href={`/${linkName.toLowerCase()}`}>{linkName}</Link>
		</article>
	);
};

export default AuthenticationLink;
