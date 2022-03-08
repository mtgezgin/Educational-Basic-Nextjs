import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

function MeetupItem(props) {
	const router = useRouter();
	const showDetailHandler = () => {
		router.push({
			pathname: '/[id]',
			query: { id: props.id },
		});
	};
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<Image
						src={props.image}
						alt={props.title}
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
