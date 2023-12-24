import { Text as RNText, TextProps } from "react-native";
import { styled } from "nativewind";

const Text = (props: TextProps) => {
	return <RNText className="text-text" {...props} />;
};

const TextP = styled(Text, "font-[GabaritoRegular]");

const TextH1 = styled(Text, "text-3xl font-[GabaritoBold]");

const TextH2 = styled(Text, "text-2xl font-[GabaritoBold]");

const TextH3 = styled(Text, "text-xl font-[GabaritoBold]");

const TextSection = styled(Text, "text-xl font-[GabaritoSemiBold]");

const TextLabel = styled(Text, "text-border font-[GabaritoSemiBold]");

const TextButton = styled(Text, "text-lg font-[GabaritoSemiBold]");

Text.P = TextP;
Text.H1 = TextH1;
Text.H2 = TextH2;
Text.H3 = TextH3;
Text.Section = TextSection;
Text.Label = TextLabel;
Text.Button = TextButton;

export default Text;
