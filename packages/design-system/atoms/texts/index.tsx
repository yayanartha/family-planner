import { Text as RNText, TextProps } from "react-native";
import { styled } from "nativewind";

const Text = (props: TextProps) => {
	return <RNText className="text-text" {...props} />;
};

const TextP = styled(Text, "font-[GabaritoRegular]");

const TextH1 = styled(Text, "text-3xl font-[GabaritoBold]");

const TextH2 = styled(Text, "text-2xl font-[GabaritoBold]");

const TextLabel = styled(Text, "text-border font-[GabaritoSemiBold]");

const TextButton = styled(Text, "text-lg font-[GabaritoSemiBold]");

Text.P = TextP;
Text.Label = TextLabel;
Text.H1 = TextH1;
Text.H2 = TextH2;
Text.Button = TextButton;

export default Text;
