import { useCallback, useMemo } from "react";
import { Section } from "design-system/molecules";
import {
	View,
	FlatList,
	ListRenderItem,
	useWindowDimensions,
} from "react-native";
import { Event } from "../../schemas/event.schema";
import { CardEvent } from "design-system/molecules/card-event";

interface Props {
	data: Event[];
}

export const SectionEvents = ({ data }: Props) => {
	const { width: screenWidth } = useWindowDimensions();
	const cardWidth = useMemo(() => (screenWidth - 32) * 0.9, [screenWidth]);

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
				width={cardWidth}
			/>
		),
		[cardWidth],
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
				pagingEnabled
				snapToInterval={cardWidth}
				snapToAlignment="start"
				decelerationRate="fast"
			/>
		</View>
	);
};
