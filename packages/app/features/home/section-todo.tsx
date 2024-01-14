import { useCallback } from "react";
import { Section } from "design-system/molecules";
import { View, FlatList, ListRenderItem } from "react-native";
import { Todo } from "../../schemas/todo.schema";
import { CardTodo } from "design-system/molecules/card-todo";

interface Props {
	data: Todo[];
}

export const SectionTodo = ({ data }: Props) => {
	const renderItem: ListRenderItem<Todo> = useCallback(
		({ item }) => (
			<CardTodo
				id={item.id}
				title={item.title}
				done={item.done}
				icon={item.icon}
				color={item.color}
			/>
		),
		[],
	);

	const renderSeparator = useCallback(() => <View className="h-4" />, []);

	return (
		<View style={{ gap: 8 }}>
			<Section title="To Do List" />

			<View style={{ paddingHorizontal: 16 }}>
				<FlatList
					data={data}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={renderSeparator}
					renderItem={renderItem}
				/>
			</View>
		</View>
	);
};
