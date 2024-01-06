import { View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useMemo } from "react";
import { Button, Text } from "../../atoms";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../colors";
import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

interface Props {
	id: number;
	image: string;
	name: string;
	category: string;
	description: string;
	start_date: number;
	participants: {
		id: number;
		photo: string;
	}[];
}

export const CardEvent = ({
	id,
	image,
	name,
	category,
	description,
	start_date,
	participants,
}: Props) => {
	const { width: screenWidth } = useWindowDimensions();
	const cardWidth = useMemo(() => (screenWidth - 32) * 0.9, [screenWidth]);

	return (
		<Button
			className="rounded-2xl overflow-hidden border border-form"
			style={{ width: cardWidth }}
		>
			<View>
				<Image
					source={{ uri: image }}
					className="rounded-tl-2xl rounded-tr-2xl"
					style={{
						width: "100%",
						height: 120,
						resizeMode: "cover",
					}}
				/>

				<LinearGradient
					className="absolute p-4 w-full h-full justify-between"
					start={{ x: 0, y: 0.5 }}
					end={{ x: 0.5, y: 0.5 }}
					colors={[`${colors.primary}99`, `${colors.primary}00`]}
				>
					<Text.H3 className="text-background">
						{formatDistanceToNowStrict(fromUnixTime(start_date))}
					</Text.H3>

					<View className="flex-row items-center" style={{ gap: -8 }}>
						{participants.map((p, index) => (
							<Image
								key={p.id}
								source={p.photo}
								className={`rounded-2xl bg-border border-2 border-background ${
									index === 0 ? "w-10 h-10" : "w-9 h-9"
								}`}
							/>
						))}
					</View>
				</LinearGradient>
			</View>

			<View className="p-4" style={{ gap: 8 }}>
				<Text.Button className="text-secondary text-sm tracking-widest">
					{category}
				</Text.Button>
				<Text.H3 numberOfLines={1}>{name}</Text.H3>
				<Text.P numberOfLines={2}>{description}</Text.P>
			</View>
		</Button>
	);
};
