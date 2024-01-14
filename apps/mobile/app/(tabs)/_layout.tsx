import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { colors } from "design-system/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppProvider } from "app/provider";
import { Text, Icon } from "design-system/atoms";

const TabBar = ({ navigation, state, descriptors }: BottomTabBarProps) => {
	return (
		<SafeAreaView
			edges={["bottom"]}
			style={{ backgroundColor: colors.background }}
		>
			<View className="flex-row h-16 bg-primary rounded-full mx-4 overflow-hidden space-x-2 px-2">
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const focused = index === state.index;
					const color =
						(focused
							? options.tabBarActiveTintColor
							: options.tabBarInactiveTintColor) || colors.border;

					return (
						<Pressable
							key={route.name}
							onPress={() => navigation.navigate(route.name)}
							className="flex-1 h-full items-center justify-center space-y-1"
						>
							{options.tabBarIcon?.({ focused, size: 20, color })}

							<Text
								style={{
									color,
									fontSize: 12,
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
	return (
		<AppProvider>
			<Tabs
				tabBar={(props) => <TabBar {...props} />}
				screenOptions={{
					headerShown: false,
					tabBarHideOnKeyboard: true,
					tabBarActiveTintColor: colors.background,
					tabBarInactiveTintColor: `${colors.border}99`,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						href: "/",
						tabBarLabel: "Home",
						tabBarIcon: ({ color, size }) => (
							<Icon name="home" size={size} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="finance"
					options={{
						href: "/finance",
						tabBarLabel: "Finance",
						tabBarIcon: ({ color, size }) => (
							<Icon name="pie-chart" size={size} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="groceries"
					options={{
						href: "/groceries",
						tabBarLabel: "Groceries",
						tabBarIcon: ({ color, size }) => (
							<Icon name="shopping-bag" size={size} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="calendar"
					options={{
						href: "/calendar",
						tabBarLabel: "Calendar",
						tabBarIcon: ({ color, size }) => (
							<Icon name="calendar" size={size} color={color} />
						),
					}}
				/>
			</Tabs>
		</AppProvider>
	);
}
