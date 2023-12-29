import { View, PressableProps } from "react-native";
import { Button, Text } from "../../atoms";

interface Props extends PressableProps {
	title: string;
}

export const Section = ({ title, ...props }: Props) => {
	return (
		<Button
			className="flex-row items-center px-4"
			android_ripple={null}
			{...props}
		>
			<View className="flex-1">
				<Text.Section>{title}</Text.Section>
			</View>

			<Text.Button>See All</Text.Button>
		</Button>
	);
};
