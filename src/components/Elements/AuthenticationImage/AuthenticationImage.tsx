import Image from "next/image";

type AuthenticationImageType = {
	imgSrc: string;
	altText: string;
	imgCaption: string;
};

const AuthenticationImage = ({
	imgSrc,
	altText,
	imgCaption,
}: AuthenticationImageType) => {
	return (
		<>
			<figure>
				<Image src={imgSrc} alt={altText} height="500" width="700" />
			</figure>
			<p>{imgCaption}</p>
		</>
	);
};

export default AuthenticationImage;
