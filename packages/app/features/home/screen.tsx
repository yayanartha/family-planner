import { useCallback, useState } from "react";
import { View, FlatList, ListRenderItem } from "react-native";
import { ChartDashboardWithLegend } from "design-system/organisms";
import {
	BtnMyProfile,
	BtnNotification,
	Greeting,
	Section,
	TabBar,
} from "design-system/molecules";
import { SectionSpending } from "./section-spendings";
import { Spending } from "../../schemas/spending.schema";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientFooter } from "design-system/atoms";

enum FilterTab {
	Today = 0,
	Week = 1,
	Month = 2,
	Year = 3,
}

type HomeData =
	| {
			section: "Dashboard";
			data: {
				incomesAmount: number;
				savingsAmount: number;
				expensesAmount: number;
			};
	  }
	| {
			section: "Spendings";
			data: Spending[];
	  }
	| {
			section: "Events";
			data: [];
	  }
	| {
			section: "To Do List";
			data: [];
	  };

export const HomeScreen = () => {
	const [filterTab, setFilterTab] = useState(FilterTab.Today);

	const renderItem: ListRenderItem<HomeData> = useCallback(({ item }) => {
		if (item.section === "Spendings") {
			return <SectionSpending data={item.data} />;
		}

		if (item.section === "Events") {
			return (
				<View style={{ gap: 8 }}>
					<Section title="Events" />
				</View>
			);
		}

		if (item.section === "To Do List") {
			return (
				<View style={{ gap: 8 }}>
					<Section title="To Do List" />
				</View>
			);
		}

		return (
			<ChartDashboardWithLegend
				incomesAmount={20000000}
				savingsAmount={1600000}
				expensesAmount={4800000}
			/>
		);
	}, []);

	const renderFooter = useCallback(() => null, []);

	return (
		<View className="flex-1 bg-background">
			<View className="py-2" style={{ gap: 8 }}>
				<SafeAreaView
					edges={["top"]}
					style={{
						paddingHorizontal: 16,
						flexDirection: "row",
						alignItems: "center",
						gap: 12,
					}}
				>
					<Greeting />

					<BtnNotification />

					<BtnMyProfile />
				</SafeAreaView>

				<TabBar
					data={["Today", "Week", "Month", "Year"]}
					activeIndex={filterTab}
					onIndexChanged={setFilterTab}
				/>
			</View>

			<View className="flex-1">
				<FlatList
					data={[
						{
							section: "Dashboard",
							data: {
								incomesAmount: 20000000,
								savingsAmount: 3000000,
								expensesAmount: 12000000,
							},
						},
						{
							section: "Spendings",
							data: [
								{
									id: 1,
									icon: "🥘",
									name: "Food",
									amount: 3500000,
									budget: 4500000,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo: "https://picsum.photos/seed/picsum/110/110",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://picsum.photos/seed/picsum/100/100",
										},
									],
								},
								{
									id: 2,
									icon: "🚙",
									name: "Transportation",
									amount: 1000000,
									budget: 1500000,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo: "https://picsum.photos/seed/picsum/110/110",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://picsum.photos/seed/picsum/100/100",
										},
									],
								},
							],
						},
						{
							section: "Events",
							data: [],
						},
						{
							section: "To Do List",
							data: [],
						},
					]}
					renderItem={renderItem}
					ListFooterComponent={renderFooter}
					contentContainerStyle={{ paddingVertical: 16, gap: 20 }}
				/>
			</View>

			<GradientFooter />
		</View>
	);
};
