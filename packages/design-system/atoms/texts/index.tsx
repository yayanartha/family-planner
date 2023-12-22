import { Text as RNText, TextProps } from "react-native";
import { styled } from "nativewind";

const Text = (props: TextProps) => {
	return <RNText className="text-text" {...props} />;
};

const P = styled(Text, "font-[GabaritoRegular]");

const H1 = styled(Text, "text-3xl font-[GabaritoSemiBold]");

const H2 = styled(Text, "text-2xl font-[GabaritoSemiBold]");

Text.P = P;
Text.H1 = H1;
Text.H2 = H2;

export default Text;
