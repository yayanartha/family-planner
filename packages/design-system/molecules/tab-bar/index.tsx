import { useMemo } from "react";
import { View, useWindowDimensions } from "react-native";
import { Button } from "../../atoms";
import Reanimated, {
	useAnimatedStyle,
	Layout,
	withTiming,
	Easing,
} from "react-native-reanimated";
import { colors } from "../../colors";

interface Props {
	data: string[];
	onIndexChanged(index: number): void;
	activeIndex?: number;
}

export const TabBar = ({ data, activeIndex = 0, onIndexChanged }: Props) => {
	const { width: screenWidth } = useWindowDimensions();

	const tabWidth = useMemo(
		() => (screenWidth - 32) / data.length,
		[screenWidth, data],
	);

	const animatedBackground = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withTiming(activeIndex * tabWidth, {
						duration: 300,
						easing: Easing.inOut(Easing.quad),
					}),
				},
			],
		};
	}, [activeIndex, tabWidth]);

	return (
		<View className="flex-row items-center bg-card h-12 mx-[16px] rounded-[16px]">
			<Reanimated.View
				layout={Layout}
				style={[
					animatedBackground,
					{
						height: "100%",
						width: tabWidth,
						position: "absolute",
						borderWidth: 1,
						borderColor: colors.border,
						backgroundColor: colors.background,
						borderRadius: 16,
					},
				]}
			/>

			{data.map((title, index) => (
				<Button
					key={title}
					onPress={() => onIndexChanged(index)}
					className="h-full"
					style={{ width: tabWidth }}
				>
					{title}
				</Button>
			))}
		</View>
	);
};
