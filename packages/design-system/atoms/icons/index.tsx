import Text from "../texts";
import { TextProps } from "react-native";
import { styled } from "nativewind";
import { colors } from "../../colors";

const icons = {
	"alert-circle": "",
	archive: "",
	"arrow-right": "",
	bell: "",
	calendar: "",
	"chevron-down": "",
	"chevron-right": "",
	home: "",
	"pie-chart": "",
	"shopping-bag": "",
	"trending-down": "",
	"trending-up": "",
	user: "",
};

interface Props extends TextProps {
	name: keyof typeof icons;
	size?: number;
	color?: string;
}

const Icon = ({
	name,
	size = 24,
	color = colors.text,
	style,
	...props
}: Props) => {
	return (
		<Text style={[{ fontSize: size, color }, style]} {...props}>
			{icons[name]}
		</Text>
	);
};

export default styled(Icon, "font-[IcoMoon]");
