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
import { SectionSpendings } from "./section-spendings";
import { Spending } from "../../schemas/spending.schema";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientView } from "design-system/atoms";
import { SectionEvents } from "./section-events";
import { Event } from "../../schemas/event.schema";

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
			data: Event[];
	  }
	| {
			section: "To Do List";
			data: [];
	  };

export const HomeScreen = () => {
	const [filterTab, setFilterTab] = useState(FilterTab.Today);

	const renderItem: ListRenderItem<HomeData> = useCallback(({ item }) => {
		if (item.section === "Spendings") {
			return <SectionSpendings data={item.data} />;
		}

		if (item.section === "Events") {
			return <SectionEvents data={item.data} />;
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
			<View style={{ gap: 8 }}>
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
											photo: "https://source.unsplash.com/random/100x100?sig=4",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://source.unsplash.com/random/100x100?sig=5",
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
											photo: "https://source.unsplash.com/random/100x100?sig=6",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://source.unsplash.com/random/100x100?sig=7",
										},
									],
								},
								{
									id: 3,
									icon: "🎓",
									name: "Education",
									amount: 1100000,
									budget: 1100000,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo: "https://source.unsplash.com/random/100x100?sig=7",
										},
									],
								},
								{
									id: 4,
									icon: "🤱",
									name: "Nanny",
									amount: 1600000,
									budget: 1600000,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo:
												"https://source.unsplash.com/random/100x100?sig=66",
										},
									],
								},
							],
						},
						{
							section: "Events",
							data: [
								{
									id: 1,
									image: "https://source.unsplash.com/random/600x600?sig=14",
									name: "Japan Trip Here We Go!! 🥺👉👈",
									category: "TRAVELING",
									description:
										"7 days 6 nights in Japan with our big lovely family. Gonna visit popular landmarks in Osaka, Tokyo, and many more.",
									start_date: 1703025857,
									end_date: 1703630657,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo: "https://source.unsplash.com/random/100x100?sig=2",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://source.unsplash.com/random/100x100?sig=3",
										},
									],
								},
								{
									id: 2,
									image: "https://source.unsplash.com/random/600x600?sig=19",
									name: "Rapotan Wayan",
									category: "SCHOOL",
									description: "Dateng pagi, jangan telat",
									start_date: 1703025857,
									end_date: 1703630657,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo:
												"https://source.unsplash.com/random/100x100?sig=20",
										},
										{
											id: 2,
											name: "User 2",
											photo:
												"https://source.unsplash.com/random/100x100?sig=30",
										},
									],
								},
								{
									id: 3,
									image: "https://source.unsplash.com/random/600x600?sig=16",
									name: "SG Again Kuyy",
									category: "TRAVELING",
									description: "Just chillin, no party",
									start_date: 1703025857,
									end_date: 1703630657,
									participants: [
										{
											id: 1,
											name: "User 1",
											photo: "https://source.unsplash.com/random/100x100?sig=2",
										},
										{
											id: 2,
											name: "User 2",
											photo: "https://source.unsplash.com/random/100x100?sig=3",
										},
									],
								},
							],
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
				<GradientView inverted />
				<GradientView />
			</View>
		</View>
	);
};
