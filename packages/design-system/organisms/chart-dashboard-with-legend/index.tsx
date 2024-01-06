import { View } from "react-native";
import { ChartDashboard } from "../../molecules";
import { colors } from "../../colors";

interface Props {
	incomesAmount: number;
	expensesAmount: number;
	savingsAmount: number;
}

export const ChartDashboardWithLegend = ({
	incomesAmount,
	expensesAmount,
	savingsAmount,
}: Props) => {
	return (
		<View className="flex-row items-center -my-10" style={{ gap: 16 }}>
			<ChartDashboard
				incomesAmount={incomesAmount}
				savingsAmount={savingsAmount}
				expensesAmount={expensesAmount}
			/>

			<View className="flex-1" style={{ gap: 12 }}>
				<ChartDashboard.Legend
					label="Incomes"
					value={incomesAmount}
					color={colors.secondary}
				/>

				<ChartDashboard.Legend
					label="Savings"
					value={savingsAmount}
					color={colors.form}
					borderColor={colors.border}
				/>

				<ChartDashboard.Legend
					label="Expenses"
					value={expensesAmount}
					color={colors.primary}
				/>
			</View>
		</View>
	);
};
