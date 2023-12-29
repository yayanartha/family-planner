import { LinearGradient } from "expo-linear-gradient";
import { colors } from "design-system/colors";

export const GradientFooter = () => {
	return (
		<LinearGradient
			colors={[
				`${colors.background}00`,
				`${colors.background}99`,
				colors.background,
			]}
			locations={[0, 0.5, 0.8]}
			style={{ height: 24, position: "absolute", bottom: 0, width: "100%" }}
		/>
	);
};
