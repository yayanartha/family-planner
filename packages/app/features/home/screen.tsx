import React from "react";
import { View, Button, Text } from "react-native";
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
			<View className="border border-red-600 px-4">
				<Text className="bg-[secondary] font-[GabaritoRegular]">Welcome</Text>
				<Text className="text-lg" style={{ fontFamily: "GabaritoSemiBold" }}>
					December, 2023
				</Text>
			</View>
			{/* <Button title="Load" onPress={load} /> */}
		</SafeAreaView>
	);
};
