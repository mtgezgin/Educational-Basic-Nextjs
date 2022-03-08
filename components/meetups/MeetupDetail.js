import Image from 'next/image';
import classes from './MeetupDetail.module.css';
const MeetupDetail = (props) => {
	const { image, title, address, description } = props;
	return (
		<section className={classes.detail}>
			<div className={classes.image}>
				<Image src={image} alt={title} layout='fill' objectFit='cover' />
			</div>

			<h1>{title}</h1>
			<address>{address}</address>
			<p>{description}</p>
		</section>
	);
};

export default MeetupDetail;
