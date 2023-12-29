import { View } from "react-native";
import { Button, Icon } from "../../atoms";

export const BtnNotification = () => {
	const hasUnreadNotification = true;

	return (
		<View>
			<Button className="bg-card w-11 h-11 rounded-full">
				<Icon name="bell" size={20} />
			</Button>

			{hasUnreadNotification && (
				<View className="absolute w-3 h-3 rounded-full bg-notification right-0 top-0" />
			)}
		</View>
	);
};
