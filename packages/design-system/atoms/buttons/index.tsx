import { useMemo, Children, cloneElement } from "react";
import { Pressable, PressableProps, TextProps } from "react-native";
import { styled } from "nativewind";
import Text from "../texts";

interface Props extends PressableProps {
	labelStyle?: TextProps["style"];
}

const Button = ({ children, labelStyle, ...props }: Props) => {
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
			className="rounded-2xl flex-row items-center justify-center h-14"
			{...props}
		>
			{renderChildren}
		</Pressable>
	);
};

const ButtonPrimary = styled(Button, "bg-primary", {
	props: {
		labelStyle: true,
	},
});
ButtonPrimary.defaultProps = {
	labelStyle: "text-card",
};

const ButtonSecondary = styled(Button, "border border-border", {
	props: {
		labelStyle: true,
	},
});
ButtonSecondary.defaultProps = {
	labelStyle: "text-text",
};

Button.Primary = ButtonPrimary;
Button.Secondary = ButtonSecondary;

export default Button;
