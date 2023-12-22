import React from "react";
import { View, Button } from "react-native";
import { Text } from "design-system/atoms";
import { api } from "backend-api";
import { SafeAreaView } from "react-native-safe-area-context";

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
			<View className="border border-notification px-4">
				<Text.P className="text-border">Welcome</Text.P>
				<Text.H2>December, 2023</Text.H2>
			</View>
			{/* <Button title="Load" onPress={load} /> */}
		</SafeAreaView>
	);
};
