import { useLocalSearchParams } from "expo-router";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { CMSData, cmsData } from "../data";

const handlePress = (cmsData: CMSData) => {
  console.log("Pressed:", cmsData.name);
};

type Props = {
  cmsData: CMSData;
  onPress: () => void;
};

const CMSItem = ({ cmsData, onPress }: Props) => {
  return (
    <View>
      <Button title={cmsData.name} onPress={onPress} />
    </View>
  );
};

export default function ConstructionModifierScreen(item: CMSData) {
  const { factionId, legionId, loyaltyId } = useLocalSearchParams<{
    factionId: string;
    legionId?: string;
    loyaltyId?: string;
  }>();
  console.log("Params:", { factionId, legionId, loyaltyId });

  const filteredData = cmsData.filter((item) => {
    const matchesFaction = !factionId || item.faction.includes(factionId);
    const matchesLegion = !item.legion || item.legion === legionId;
    const matchesLoyalty = !item.loyalty || item.loyalty === loyaltyId;

    return matchesFaction && matchesLegion && matchesLoyalty;
  });

  return (
    <PageLayout>
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CMSItem
              cmsData={item}
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
