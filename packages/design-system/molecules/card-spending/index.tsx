import { useMemo } from "react";
import { View } from "react-native";
import { Button, Text } from "../../atoms";
import { colors } from "../../colors";
import { toCurrency } from "app/utils/currency";
import { Image } from "expo-image";

interface Props {
	id: number;
	icon: string;
	name: string;
	amount: number;
	budget: number;
	participants: {
		id: number;
		photo: string;
	}[];
	width: number;
}

export const CardSpending = ({
	id,
	icon,
	name,
	amount,
	budget,
	participants,
	width,
}: Props) => {
	const progressWidth = useMemo(() => {
		const progress = (amount / budget) * 100;

		return Math.min(progress, 100);
	}, [amount, budget]);

	const isCompleted = useMemo(() => progressWidth >= 100, [progressWidth]);

	return (
		<Button
			className="p-4 rounded-2xl bg-card border border-form"
			onPress={() => null}
			style={{ width, gap: 16 }}
		>
			<View className="flex-row" style={{ gap: 8 }}>
				<Text.H2>{icon}</Text.H2>
				<View className="flex-1">
					<Text.Button numberOfLines={1}>{name}</Text.Button>
				</View>
			</View>

			<View style={{ gap: 8 }}>
				<Text.Label className="text-primary">{toCurrency(amount)}</Text.Label>

				<View
					className="w-full h-1 rounded-lg"
					style={{ backgroundColor: `${colors.border}66` }}
				>
					<View
						className={`h-full rounded-lg ${
							isCompleted ? "bg-secondary" : "bg-primary"
						}`}
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
							className={`rounded-2xl bg-border border-2 border-background ${
								index === 0 ? "w-10 h-10" : "w-9 h-9"
							}`}
						/>
					))}
				</View>

				{isCompleted ? (
					<Text.H3>💯</Text.H3>
				) : (
					progressWidth > 70 && <Text.H3>🔥</Text.H3>
				)}
			</View>
		</Button>
	);
};
