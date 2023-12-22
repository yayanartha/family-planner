import Text from "../texts";
import { TextProps } from "react-native";
import { styled } from "nativewind";
import { colors } from "../../colors";

const icons = {
	"alert-circle": "",
	archive: "",
	calendar: "",
	"chevron-down": "",
	home: "",
	"pie-chart": "",
	"shopping-bag": "",
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
