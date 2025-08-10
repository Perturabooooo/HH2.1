import PageLayout from "@/app/components/pagelayout/PageLayout";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function LoyaltySelectScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  // const { faction } = route.params;

  return (
    <PageLayout>
      <Text className="text-white text-2xl font-bold mb-8">
        Whom do you serve?
      </Text>

      <TouchableOpacity
        className="bg-blue-800 px-6 py-3 rounded-lg mb-4"
        onPress={() => {
          /* Navigate to Unit screen */
        }}
      >
        <Text className="text-white text-lg">Loyalist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-red-800 px-6 py-3 rounded-lg"
        onPress={() => {
          /* Navigate to Unit screen */
        }}
      >
        <Text className="text-white text-lg">Traitor</Text>
      </TouchableOpacity>
    </PageLayout>
  );
}
