import { useCallback } from "react";
import {
	View,
	FlatList,
	ListRenderItem,
	useWindowDimensions,
} from "react-native";
import { Text, Button, Icon } from "design-system/atoms";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "design-system/colors";
import { VictoryPie } from "victory-native";
import { Section } from "design-system/molecules";

interface SpendingItem {
	id: number;
	icon: string;
	name: string;
	amount: string;
	budget: string;
}

export const HomeScreen = () => {
	const { width: screenWidth } = useWindowDimensions();
	const spendingsCardWidth = (screenWidth - 32 - 12) * 0.75;

	const renderSpendingsItem: ListRenderItem<SpendingItem> = useCallback(
		({ item }) => (
			<View
				className="p-4 rounded-2xl bg-card"
				style={{ width: spendingsCardWidth, gap: 16 }}
			>
				<View style={{ gap: 8 }}>
					<View className="flex-row items-center gap-x-2">
						<Text.H2>{item.icon}</Text.H2>
						<View className="flex-1">
							<Text.H3>{item.name}</Text.H3>
						</View>
					</View>

					{/* <Text.P className="text-border">Dec 24, 14:39</Text.P> */}
				</View>

				<View style={{ gap: 8 }}>
					<View className="flex-row items-center justify-between">
						<Text.Label className="text-text">{item.amount}</Text.Label>
						<Text.P className="text-border">{item.budget}</Text.P>
					</View>

					<View
						className="w-full h-1 rounded-lg"
						style={{ backgroundColor: `${colors.border}66` }}
					>
						<View className="bg-primary w-2/3 h-full rounded-lg" />
					</View>
				</View>

				<View className="flex-row items-center">
					<View className="flex-1 flex-row items-center" style={{ gap: -8 }}>
						<View className="w-10 h-10 rounded-full bg-border border-2 border-background" />
						<View className="w-8 h-8 rounded-full bg-border border-2 border-background" />
						<View className="w-8 h-8 rounded-full bg-border border-2 border-background" />
					</View>

					<Text.H3>🔥</Text.H3>
				</View>
			</View>
		),
		[spendingsCardWidth],
	);

	const renderSpendingsSeparator = useCallback(
		() => <View className="w-4" />,
		[],
	);

	return (
		<View className="flex-1 bg-background">
			<SafeAreaView style={{ paddingVertical: 16, gap: 20 }}>
				<View className="px-4 flex-row items-center" style={{ gap: 8 }}>
					<View className="flex-1">
						<Text.P>Welcome</Text.P>
						<Text.H2>December, 2023</Text.H2>
					</View>

					<Button className="bg-card w-11 h-11 rounded-full">
						<Icon name="bell" size={20} />
						<View className="absolute w-3 h-3 rounded-full bg-notification right-0 top-0" />
					</Button>

					<Button className="bg-card w-11 h-11 rounded-full">
						<Icon name="user" size={20} />
					</Button>
				</View>

				<View className="mx-4 flex-row items-center bg-card rounded-2xl h-12">
					<Button className="h-full w-1/4 px-4 rounded-2xl">Today</Button>
					<Button className="h-full w-1/4 px-4 rounded-2xl bg-background border border-border">
						Week
					</Button>
					<Button className="h-full w-1/4 px-4 rounded-2xl">Month</Button>
					<Button className="h-full w-1/4 px-4 rounded-2xl">Year</Button>
				</View>

				<View className="flex-row items-center gap-x-4 -my-10">
					<View className="flex-1 items-center justify-center">
						<VictoryPie
							data={[
								{ x: "Expense", y: 30 },
								{ x: "Incomes", y: 60 },
								{ x: "Savings", y: 10 },
							]}
							animate={{ duration: 1000 }}
							width={260}
							height={260}
							padAngle={2}
							innerRadius={70}
							labels={() => null}
							cornerRadius={10}
							colorScale={[colors.notification, colors.primary, colors.form]}
						/>

						<View className="absolute w-[160px] h-[160px] items-center justify-center">
							<Text className="text-4xl mb-2">😁</Text>
							<Text.Label className="text-sm">Your balance</Text.Label>
							<Text.H3 className="text-secondary">
								<Icon name="trending-up" size={16} color={colors.secondary} />{" "}
								+5%
							</Text.H3>
						</View>
					</View>

					<View className="flex-1 gap-y-3">
						<View className="flex-row gap-x-2">
							<View className="w-4 h-4 rounded-md bg-primary mt-1" />
							<View className="flex-1">
								<Text.Label>Incomes</Text.Label>
								<Text.H3>Rp16.000.000</Text.H3>
							</View>
						</View>

						<View className="flex-row gap-x-2">
							<View className="w-4 h-4 rounded-md bg-form mt-1 border border-border" />
							<View className="flex-1">
								<Text.Label>Savings</Text.Label>
								<Text.H3>Rp1.600.000</Text.H3>
							</View>
						</View>

						<View className="flex-row gap-x-2">
							<View className="w-4 h-4 rounded-md bg-notification mt-1" />
							<View className="flex-1">
								<Text.Label>Expenses</Text.Label>
								<Text.H3>Rp4.800.000</Text.H3>
							</View>
						</View>
					</View>
				</View>

				<View style={{ gap: 8 }}>
					<Section title="Spendings" />

					<FlatList
						data={[
							{
								id: 1,
								icon: "🥘",
								name: "Food",
								amount: "Rp3.500.000",
								budget: "Rp4.500.000",
							},
							{
								id: 2,
								icon: "🚙",
								name: "Transportation",
								amount: "Rp1.000.000",
								budget: "Rp1.500.000",
							},
						]}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingHorizontal: 16 }}
						horizontal
						ItemSeparatorComponent={renderSpendingsSeparator}
						renderItem={renderSpendingsItem}
					/>
				</View>

				<View style={{ gap: 8 }}>
					<Section title="Events" />
				</View>

				<View style={{ gap: 8 }}>
					<Section title="To Do List" />
				</View>
			</SafeAreaView>
		</View>
	);
};
