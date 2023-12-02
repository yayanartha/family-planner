import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "app/design/theme";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		GabaritoBlack: require("../assets/fonts/Gabarito-Black.ttf"),
		GabaritoBold: require("../assets/fonts/Gabarito-Bold.ttf"),
		GabaritoExtraBold: require("../assets/fonts/Gabarito-ExtraBold.ttf"),
		GabaritoMedium: require("../assets/fonts/Gabarito-Medium.ttf"),
		GabaritoRegular: require("../assets/fonts/Gabarito-Regular.ttf"),
		GabaritoSemiBold: require("../assets/fonts/Gabarito-SemiBold.ttf"),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</ThemeProvider>
	);
}
