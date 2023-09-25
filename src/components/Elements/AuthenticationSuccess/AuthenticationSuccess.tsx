import Link from "next/link";

type AuthenticationSuccessType = {
	title: string;
	linkURL: string;
	linkName: string;
};

const AuthenticationSuccess = ({
	title,
	linkURL,
	linkName,
}: AuthenticationSuccessType) => {
	return (
		<>
			<h1>{title}</h1>
			<Link href={`/${linkURL}`} passHref>
				{linkName}
			</Link>
		</>
	);
};

export default AuthenticationSuccess;
