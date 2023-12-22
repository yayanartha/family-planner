import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppProvider } from "app/provider";
import { Image, ImageSource } from "expo-image";
import {
	HomeIcon,
	FinanceIcon,
	GroceriesIcon,
	ArchiveIcon,
} from "../../../../packages/design-system/atoms/icons";
import { Text } from "design-system/atoms";

const TabBar = ({ navigation, state, descriptors }: BottomTabBarProps) => {
	const { colors } = useTheme();

	return (
		<SafeAreaView>
			<View className="flex-row h-16 bg-black rounded-full m-2 overflow-hidden space-x-2 px-2">
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const focused = index === state.index;
					const color =
						(focused
							? options.tabBarActiveTintColor
							: options.tabBarInactiveTintColor) || colors.background;

					return (
						<Pressable
							key={route.name}
							onPress={() => navigation.navigate(route.name)}
							className="flex-1 h-full items-center justify-center space-y-1"
						>
							<Image
								source={
									options.tabBarIcon?.({
										focused,
										size: 20,
										color,
									}) as ImageSource
								}
								style={{ width: 20, height: 20, tintColor: color }}
							/>

							<Text
								style={{
									color,
									fontFamily: focused ? "GabaritoSemiBold" : "GabaritoRegular",
								}}
							>
								{options.tabBarLabel as string}
							</Text>
						</Pressable>
					);
				})}
			</View>
		</SafeAreaView>
	);
};

export default function TabLayout() {
	const { colors } = useTheme();

	return (
		<AppProvider>
			<Tabs
				tabBar={(props) => <TabBar {...props} />}
				screenOptions={{
					headerShown: false,
					tabBarHideOnKeyboard: true,
					tabBarActiveTintColor: colors.background,
					tabBarInactiveTintColor: colors.border,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						href: "/",
						tabBarLabel: "Home",
						tabBarIcon: () => HomeIcon,
					}}
				/>
				<Tabs.Screen
					name="finance"
					options={{
						href: "/finance",
						tabBarLabel: "Finance",
						tabBarIcon: () => FinanceIcon,
					}}
				/>
				<Tabs.Screen
					name="groceries"
					options={{
						href: "/groceries",
						tabBarLabel: "Groceries",
						tabBarIcon: () => GroceriesIcon,
					}}
				/>
				<Tabs.Screen
					name="archive"
					options={{
						href: "/archive",
						tabBarLabel: "Archive",
						tabBarIcon: () => ArchiveIcon,
					}}
				/>
			</Tabs>
		</AppProvider>
	);
}
