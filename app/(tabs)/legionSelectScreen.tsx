import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Button, FlatList, View } from "react-native";
import PageLayout from "../components/pagelayout/PageLayout";
import { Data, legionData } from "../data";

type Props = {
  legion: Data;
  onPress: () => void;
  isSelected: boolean;
};

const LegionItem = ({ legion, onPress, isSelected }: Props) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <Button
        title={`${isSelected ? "✅ " : ""}${legion.displayName}`}
        onPress={onPress}
        color={isSelected ? "green" : undefined}
      />
    </View>
  );
};

export default function legionSelectScreen() {
  const router = useRouter();
  const { factionId } = useLocalSearchParams();
  const [selectedLegions, setSelectedLegions] = useState<Data[]>([]);

  const isFaction2 = factionId === "2";

  const toggleSelect = (legion: Data) => {
    const isAlreadySelected = selectedLegions.some((l) => l.id === legion.id);

    if (isAlreadySelected) {
      // Deselect
      setSelectedLegions(selectedLegions.filter((l) => l.id !== legion.id));
    } else {
      if (selectedLegions.length < 3) {
        // Select new
        setSelectedLegions([...selectedLegions, legion]);
      }
    }
  };

  const handleSinglePress = (legion: Data) => {
    if (legion.id !== "99") {
      router.push({
        pathname: "/(tabs)/loyaltySelectScreen",
        params: {
          legionId: legion.id,
          factionId,
        },
      });
    } else {
      router.push({
        pathname: "/(tabs)/constructionModifierScreen",
        params: {
          legionId: legion.id,
          factionId,
        },
      });
    }
  };

  const handleConfirmPress = () => {
    const legionIds = selectedLegions.map((l) => l.id).join(",");
    router.push({
      pathname: "/(tabs)/loyaltySelectScreen",
      params: {
        legionId: legionIds,
        factionId,
      },
    });
  };

  return (
    <PageLayout>
      <View>
        <FlatList
          data={legionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LegionItem
              legion={item}
              isSelected={selectedLegions.some((l) => l.id === item.id)}
              onPress={() => {
                isFaction2 ? toggleSelect(item) : handleSinglePress(item);
              }}
            />
          )}
        />

        {isFaction2 && (
          <View>
            <Button
              title={`Confirm Selection (${selectedLegions.length}/3)`}
              onPress={handleConfirmPress}
              disabled={selectedLegions.length === 0}
            />
          </View>
        )}
      </View>
    </PageLayout>
  );
}
