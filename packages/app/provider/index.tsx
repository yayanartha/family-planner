import { SafeArea } from "./safe-area";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SafeArea>
			<GestureHandlerRootView style={{ flex: 1 }}>
				{children}
			</GestureHandlerRootView>
		</SafeArea>
	);
};
