import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { UnitData, globalState, rosterScreenInner } from "../data/screenData"; // make sure to import the full dataset

const handlePress = (rosterScreenInner: UnitData) => {
  console.log("Pressed:", rosterScreenInner.displayName);
};

type Props = {
  rosterScreenInner: UnitData;
  onPress: () => void;
};

const RosterItem = ({ rosterScreenInner, onPress }: Props) => {
  return (
    <View>
      <Button title={rosterScreenInner.displayName} onPress={onPress} />
    </View>
  );
};

export default function RosterScreen() {
  const filteredData = rosterScreenInner.filter((item) => {
    const matchesFaction =
      !item.faction || item.faction.includes(globalState.faction);
    const matchesLegion = !item.legion || item.legion === globalState.legion;
    const matchesLoyalty =
      !item.loyalty || item.loyalty === globalState.loyalty;
    const matchesCMS = !item.cmsmod || item.cmsmod === globalState.cmsmod;
    return matchesFaction && matchesLegion && matchesLoyalty && matchesCMS;
  });

  return (
    <PageLayout>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.displayName}
        renderItem={({ item }) => (
          <RosterItem
            rosterScreenInner={item}
            onPress={() => {
              handlePress(item);
            }}
          />
        )}
        ListEmptyComponent={
          <View>
            <Button title="No items found" disabled />
          </View>
        }
      />
    </PageLayout>
  );
}
