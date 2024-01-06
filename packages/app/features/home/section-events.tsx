import { useCallback } from "react";
import { CardSpending, Section } from "design-system/molecules";
import { View, FlatList, ListRenderItem } from "react-native";
import { Spending } from "../../schemas/spending.schema";
import { Event } from "../../schemas/event.schema";
import { CardEvent } from "design-system/molecules/card-event";

interface Props {
	data: Event[];
}

export const SectionEvents = ({ data }: Props) => {
	const renderItem: ListRenderItem<Event> = useCallback(
		({ item }) => (
			<CardEvent
				id={item.id}
				image={item.image}
				name={item.name}
				category={item.category}
				description={item.description}
				start_date={item.start_date}
				participants={item.participants}
			/>
		),
		[],
	);

	const renderSeparator = useCallback(() => <View className="w-4" />, []);

	return (
		<View style={{ gap: 8 }}>
			<Section title="Events" />

			<FlatList
				data={data}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 16 }}
				horizontal
				ItemSeparatorComponent={renderSeparator}
				renderItem={renderItem}
			/>
		</View>
	);
};
