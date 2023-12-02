import React from "react";
import { View, Button, Text } from "react-native";
import { api } from "backend-api";

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
		<View className="bg-red-600">
			<Text className="p-10 text-white">Tab One</Text>
			{/* <Button title="Load" onPress={load} /> */}
		</View>
	);
};
