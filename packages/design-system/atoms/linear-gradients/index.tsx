import { LinearGradient } from "expo-linear-gradient";
import { colors } from "design-system/colors";

interface Props {
	inverted?: boolean;
}

export const GradientView = ({ inverted }: Props) => {
	return (
		<LinearGradient
			colors={[
				`${colors.background}00`,
				`${colors.background}99`,
				colors.background,
			]}
			locations={[0, 0.5, 0.8]}
			style={[
				{ height: 24, position: "absolute", width: "100%" },
				inverted
					? { top: 0, transform: [{ rotate: "180deg" }] }
					: { bottom: 0 },
			]}
		/>
	);
};
