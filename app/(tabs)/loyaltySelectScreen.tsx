import { router } from "expo-router";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { Data, globalState, loyaltyScreen } from "../data/screenData";

const handlePress = (loyalty: Data) => {
  globalState.loyalty = loyalty.id;
  let pathname: "/(tabs)/constructionModifierScreen" | "/(tabs)/rosterScreen";

  switch (globalState.faction) {
    case "4":
    case "5":
      pathname = "/(tabs)/rosterScreen";
      break;
    case "1":
    case "2":
    case "3":
    case "7":
    case "8":
    case "9":
    default:
      pathname = "/(tabs)/constructionModifierScreen";
      break;
  }
  router.push({ pathname });
};

type Props = {
  loyalty: Data;
  onPress: () => void;
};

const LoyaltyItem = ({ loyalty, onPress }: Props) => {
  return (
    <View>
      <Button title={loyalty.displayName} onPress={onPress} />
    </View>
  );
};

export default function loyaltySelectScreen() {
  return (
    <PageLayout>
      <View>
        <FlatList
          data={loyaltyScreen}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LoyaltyItem
              loyalty={item}
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
