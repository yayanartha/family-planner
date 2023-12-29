import { Button, Icon } from "../../atoms";
import { Image } from "expo-image";

export const BtnMyProfile = () => {
	const me = 1;

	return (
		<Button className="bg-card w-11 h-11 rounded-full">
			{me ? (
				<Image
					source={"https://picsum.photos/100/100"}
					style={{
						width: 44,
						height: 44,
						borderRadius: 22,
						resizeMode: "cover",
					}}
				/>
			) : (
				<Icon name="user" size={20} />
			)}
		</Button>
	);
};
