import { View } from "react-native";
import { Text, Button, Icon } from "design-system/atoms";
import { api } from "backend-api";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "design-system/colors";

async function load() {
	try {
		api["hello-world"].get().then((res) => {
			console.log("Response from backend", res.data);
		});
	} catch (error) {
		console.log("Error", error);
	}
}

export const HomeScreen = () => {
	return (
		<SafeAreaView style={{ paddingVertical: 16 }}>
			<View className="px-4 flex-row items-center">
				<View className="flex-1">
					<Text.P>Welcome</Text.P>
					<Text.H2>December, 2023</Text.H2>
				</View>
				<Button className="h-10 px-4 bg-card" onPress={load}>
					This week <Icon name="chevron-down" size={16} />
				</Button>
			</View>
		</SafeAreaView>
	);
};
