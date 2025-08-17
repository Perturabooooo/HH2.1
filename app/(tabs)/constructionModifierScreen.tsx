// for things like sisters chamber's,
// remember to add none option for space marine rite of war,
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Text from "../components/text/Text";

export default function constructionModifierScreen() {
  const { factionId, factionName } = useLocalSearchParams();

  return (
    <View>
      <Text>Faction ID: {factionId}</Text>
      <Text>Faction Name: {factionName}</Text>
    </View>
  );
}
