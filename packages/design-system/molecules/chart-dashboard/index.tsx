import { View } from "react-native";
import { useMemo } from "react";
import { VictoryPie } from "victory-native";
import { colors } from "../../colors";
import { Text, Icon } from "../../atoms";
import { toCurrency } from "app/utils/currency";

const ChartDashboardLegend = ({
	label,
	value,
	color,
	borderColor = "transparent",
}: {
	label: string;
	value: number;
	color: string;
	borderColor?: string;
}) => {
	return (
		<View className="flex-row" style={{ gap: 8 }}>
			<View
				className="w-4 h-4 rounded-md mt-1"
				style={{ backgroundColor: color, borderWidth: 1, borderColor }}
			/>
			<View className="flex-1">
				<Text.Label>{label}</Text.Label>
				<Text.P>{toCurrency(value)}</Text.P>
			</View>
		</View>
	);
};

interface Props {
	incomesAmount: number;
	savingsAmount: number;
	expensesAmount: number;
}

const ChartDashboard = ({
	incomesAmount,
	savingsAmount,
	expensesAmount,
}: Props) => {
	const savingsPercentage = useMemo(
		() => (savingsAmount / incomesAmount) * 100,
		[savingsAmount, incomesAmount],
	);

	const expensePercentage = useMemo(
		() => (expensesAmount / incomesAmount) * 100,
		[expensesAmount, incomesAmount],
	);

	const incomesPercentage = useMemo(
		() => 100 - savingsPercentage - expensePercentage,
		[savingsPercentage, expensePercentage],
	);

	return (
		<View className="flex-1 items-center justify-center">
			<VictoryPie
				data={[
					{ x: "Expense", y: expensePercentage },
					{ x: "Incomes", y: incomesPercentage },
					{ x: "Savings", y: savingsPercentage },
				]}
				animate={{ duration: 1000 }}
				width={260}
				height={260}
				padAngle={2}
				innerRadius={70}
				labels={() => null}
				cornerRadius={10}
				colorScale={[colors.primary, colors.secondary, colors.form]}
			/>

			<View className="absolute w-[160px] h-[160px] items-center justify-center">
				<Text className="text-4xl mb-2">😁</Text>
				<Text.Label className="text-sm">Your balance</Text.Label>
				<Text.H3 className="text-secondary">
					<Icon name="trending-up" size={16} color={colors.secondary} /> +5%
				</Text.H3>
			</View>
		</View>
	);
};

ChartDashboard.Legend = ChartDashboardLegend;

export default ChartDashboard;
