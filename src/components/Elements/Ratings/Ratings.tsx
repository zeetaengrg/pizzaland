import {
	MdStar,
	MdOutlineStarHalf,
	MdOutlineStarOutline,
} from "react-icons/md";
import style from "./Ratings.module.scss";

const Ratings = ({ rating }: { rating: number }) => {
	return (
		<section className={style.container}>
			<span className={style.star}>
				{rating >= 1 ? (
					<MdStar />
				) : rating >= 0.5 ? (
					<MdOutlineStarHalf />
				) : (
					<MdOutlineStarOutline />
				)}
			</span>
			<span className={style.star}>
				{rating >= 2 ? (
					<MdStar />
				) : rating >= 1.5 ? (
					<MdOutlineStarHalf />
				) : (
					<MdOutlineStarOutline />
				)}
			</span>
			<span className={style.star}>
				{rating >= 3 ? (
					<MdStar />
				) : rating >= 2.5 ? (
					<MdOutlineStarHalf />
				) : (
					<MdOutlineStarOutline />
				)}
			</span>
			<span className={style.star}>
				{rating >= 4 ? (
					<MdStar />
				) : rating >= 3.5 ? (
					<MdOutlineStarHalf />
				) : (
					<MdOutlineStarOutline />
				)}
			</span>
			<span className={style.star}>
				{rating >= 5 ? (
					<MdStar />
				) : rating >= 4.5 ? (
					<MdOutlineStarHalf />
				) : (
					<MdOutlineStarOutline />
				)}
			</span>
		</section>
	);
};
export default Ratings;
