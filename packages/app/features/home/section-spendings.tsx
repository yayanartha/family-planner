import { useCallback, useMemo } from "react";
import { CardSpending, Section } from "design-system/molecules";
import {
	View,
	FlatList,
	ListRenderItem,
	useWindowDimensions,
} from "react-native";
import { Spending } from "../../schemas/spending.schema";

interface Props {
	data: Spending[];
}

export const SectionSpendings = ({ data }: Props) => {
	const { width: screenWidth } = useWindowDimensions();

	const cardWidth = useMemo(
		() => (screenWidth - 32 - 12) * 0.45,
		[screenWidth],
	);

	const renderItem: ListRenderItem<Spending> = useCallback(
		({ item }) => (
			<CardSpending
				id={item.id}
				icon={item.icon}
				name={item.name}
				amount={item.amount}
				budget={item.budget}
				participants={item.participants}
				width={cardWidth}
			/>
		),
		[cardWidth],
	);

	const renderSeparator = useCallback(() => <View className="w-4" />, []);

	return (
		<View style={{ gap: 8 }}>
			<Section title="Spendings" />

			<FlatList
				data={data}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 16 }}
				horizontal
				ItemSeparatorComponent={renderSeparator}
				renderItem={renderItem}
				pagingEnabled
				snapToInterval={cardWidth}
				snapToAlignment="start"
				decelerationRate="fast"
			/>
		</View>
	);
};
