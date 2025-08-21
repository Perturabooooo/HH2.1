import { router, useRouter } from "expo-router";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { Data, factionData } from "../data";

const handlePress = (faction: Data) => {
  let pathname:
    | "/(tabs)/legionSelectScreen"
    | "/(tabs)/loyaltySelectScreen"
    | "/(tabs)/constructionModifierScreen"
    | "/(tabs)/rosterScreen";

  switch (faction.id) {
    case "1":
    case "2":
      pathname = "/(tabs)/legionSelectScreen";
      break;
    case "3":
    case "4":
    case "5":
    case "7":
    case "8":
      pathname = "/(tabs)/loyaltySelectScreen";
      break;
    case "6":
    case "10":
      pathname = "/(tabs)/constructionModifierScreen";
      break;
    case "9":
    default:
      pathname = "/(tabs)/rosterScreen";
      break;
  }

  router.push({
    pathname,
    params: {
      factionId: faction.id,
    },
  });
};

type Props = {
  faction: Data;
  onPress: () => void;
};

const FactionItem = ({ faction, onPress }: Props) => {
  return (
    <View>
      <Button title={faction.displayName} onPress={onPress} />
    </View>
  );
};

export default function FactionSelectScreen() {
  const router = useRouter();

  return (
    <PageLayout>
      <View>
        <FlatList
          data={factionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FactionItem
              faction={item}
              onPress={() => {
                handlePress(item);
              }}
            />
          )}
        />
      </View>
    </PageLayout>
  );
}
