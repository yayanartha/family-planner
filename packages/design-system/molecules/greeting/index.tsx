import { View } from "react-native";
import { Text } from "../../atoms";
import { format } from "date-fns";

interface Props {
	familyName?: string;
}

export const Greeting = ({ familyName = "Welcome" }: Props) => {
	return (
		<View className="flex-1">
			{/* <Text.P>{familyName}</Text.P> */}
			<Text.H2>{format(new Date(), "MMMM, yyyy")}</Text.H2>
		</View>
	);
};
