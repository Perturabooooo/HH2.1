import { router, useLocalSearchParams } from "expo-router";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { Data, loyaltyData } from "../data";

const handlePress = (loyalty: Data, factionId?: any, legionId?: any) => {
  router.push({
    pathname: "/(tabs)/constructionModifierScreen",
    params: {
      loyaltyId: loyalty.id,
      factionId,
      legionId,
    },
  });
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
  const { factionId, legionId } = useLocalSearchParams();

  return (
    <PageLayout>
      <View>
        <FlatList
          data={loyaltyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LoyaltyItem
              loyalty={item}
              onPress={() => {
                handlePress(item, factionId, legionId);
              }}
            />
          )}
        />
      </View>
    </PageLayout>
  );
}
