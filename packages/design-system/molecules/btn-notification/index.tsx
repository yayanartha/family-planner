import { View } from "react-native";
import { Button, Icon } from "../../atoms";

export const BtnNotification = () => {
	const hasUnreadNotification = true;

	return (
		<View>
			<Button className="bg-card w-11 h-11 rounded-full" contentCentered>
				<Icon name="bell" size={20} />
			</Button>

			{hasUnreadNotification && (
				<View className="absolute w-4 h-4 rounded-full bg-primary right-0 top-0 border-2 border-background" />
			)}
		</View>
	);
};
