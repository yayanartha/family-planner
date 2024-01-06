import { useMemo, Children, cloneElement } from "react";
import {
	Pressable,
	PressableProps,
	TextProps,
	Platform,
	StyleProp,
	ViewStyle,
} from "react-native";
import { styled } from "nativewind";
import Text from "../texts";
import { colors } from "../../colors";

interface Props extends PressableProps {
	labelStyle?: TextProps["style"];
	contentCentered?: boolean;
}

const Button = ({
	children,
	android_ripple = {
		foreground: true,
		color: `${colors.primary}11`,
	},
	labelStyle,
	contentCentered,
	...props
}: Props) => {
	const renderChildren = useMemo(() => {
		return Children.map(children, (child: any) => {
			if (typeof child === "string") {
				return <Text.Button style={labelStyle}>{child}</Text.Button>;
			}

			if (child) {
				return cloneElement(child, { tw: child.props.tw, ...child.props });
			}
		});
	}, [children, labelStyle]);

	return (
		<Pressable
			className={`rounded-2xl overflow-hidden opacity-100 active:opacity-60 ${
				contentCentered ? "flex-row items-center justify-center" : ""
			}`}
			accessibilityRole="button"
			android_ripple={android_ripple}
			{...props}
		>
			{renderChildren}
		</Pressable>
	);
};

const ButtonPrimary = styled(Button, "bg-primary h-14", {
	props: {
		labelStyle: true,
		contentCentered: true,
	},
});
ButtonPrimary.defaultProps = {
	labelStyle: "text-card",
};

const ButtonSecondary = styled(Button, "border border-border h-14", {
	props: {
		labelStyle: true,
		contentCentered: true,
	},
});
ButtonSecondary.defaultProps = {
	labelStyle: "text-primary",
};

Button.Primary = ButtonPrimary;
Button.Secondary = ButtonSecondary;

export default Button;
