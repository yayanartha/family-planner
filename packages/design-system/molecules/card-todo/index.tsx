import { Text } from "../../atoms";
import Button from "../../atoms/buttons";
import { View } from "react-native";
import { colors } from "../../colors";

interface Props {
	id: number;
	title: string;
	done: boolean;
	color?: string;
}

export const CardTodo = ({ id, title, done, color }: Props) => {
	return (
		<Button
			className="flex-row items-center p-4 rounded-xl"
			style={{ borderWidth: 1, borderColor: colors.border }}
		>
			<View className="flex-1">
				<Text.P>{title}</Text.P>
			</View>

			<View className="rounded-md border border-border w-6 h-6" />
		</Button>
	);
};
