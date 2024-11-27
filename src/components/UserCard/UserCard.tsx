import Image from "next/image";
import styles from "./UserCard.module.css";

const UserCard = ({
	name,
	title,
	image,
}: {
	name: string;
	title: string;
	image: string;
}) => {
	return (
		<div className={styles.card}>
			<div>
				<span className={styles.name}>{name}</span>
				<span className={styles.designation}>{title}</span>
			</div>
			<Image src={image} alt={name} width={300} height={348} />
		</div>
	);
};

export default UserCard;
