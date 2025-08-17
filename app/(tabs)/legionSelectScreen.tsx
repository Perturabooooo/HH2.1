import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Text from "../components/text/Text";

export default function LegionSelectScreen() {
  const { factionId, factionName } = useLocalSearchParams();

  return (
    <View>
      <Text>Faction ID: {factionId}</Text>
      <Text>Faction Name: {factionName}</Text>
    </View>
  );
}
