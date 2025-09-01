import { router } from "expo-router";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { CMSData, cmsData, globalState } from "../data/screenData";

const handlePress = (cmsData: CMSData) => {
  console.log("Pressed:", cmsData.name);
  globalState.cmsmod = cmsData.cmsmod;
  router.push({
    pathname: "/(tabs)/rosterScreen",
    params: cmsData,
  });
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
  const filteredData = cmsData.filter((item) => {
    const matchesFaction =
      !item.faction || item.faction.includes(globalState.faction);
    const matchesLegion = !item.legion || item.legion === globalState.legion;
    const matchesLoyalty =
      !item.loyalty || item.loyalty === globalState.loyalty;
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
