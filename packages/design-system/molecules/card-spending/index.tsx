import { useMemo } from "react";
import { View, useWindowDimensions } from "react-native";
import { Text } from "../../atoms";
import { colors } from "../../colors";
import { toCurrency } from "app/utils/currency";
import { Image } from "expo-image";

interface Props {
	id: number;
	icon: string;
	name: string;
	amount: number;
	budget: number;
	participants: { id: number; photo: string }[];
}

export const CardSpending = ({
	id,
	icon,
	name,
	amount,
	budget,
	participants,
}: Props) => {
	const { width: screenWidth } = useWindowDimensions();

	const spendingsCardWidth = useMemo(
		() => (screenWidth - 32 - 12) * 0.45,
		[screenWidth],
	);

	const progressWidth = useMemo(() => {
		const progress = (amount / budget) * 100;

		return Math.min(progress, 100);
	}, [amount, budget]);

	return (
		<View
			className="p-4 rounded-2xl bg-card"
			style={{ width: spendingsCardWidth, gap: 16 }}
		>
			<View style={{ gap: 8 }}>
				<View className="flex-row items-center gap-x-2">
					<Text.H2>{icon}</Text.H2>
					<View className="flex-1">
						<Text.Button numberOfLines={1}>{name}</Text.Button>
					</View>
				</View>

				{/* <Text.P className="text-border">Dec 24, 14:39</Text.P> */}
			</View>

			<View style={{ gap: 8 }}>
				<Text.Label className="text-primary">{toCurrency(amount)}</Text.Label>

				<View
					className="w-full h-1 rounded-lg"
					style={{ backgroundColor: `${colors.border}66` }}
				>
					<View
						className="bg-primary h-full rounded-lg"
						style={{ width: `${progressWidth}%` }}
					/>
				</View>
			</View>

			<View className="flex-row items-center">
				<View className="flex-1 flex-row items-center" style={{ gap: -8 }}>
					{participants.map((p, index) => (
						<Image
							key={p.id}
							source={p.photo}
							className={`rounded-full bg-border border-2 border-background ${
								index === 0 ? "w-10 h-10" : "w-9 h-9"
							}`}
						/>
					))}
				</View>

				<Text.H3>🔥</Text.H3>
			</View>
		</View>
	);
};
