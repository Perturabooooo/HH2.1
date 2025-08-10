import PageLayout from "@/app/components/pagelayout/PageLayout";
import Text from "@/app/components/text/Text";
import { useNavigation } from "@react-navigation/native";
import React from "react";
//import factions from '../data/factions';

export default function FactionSelectScreen() {
  const navigation = useNavigation();

  return (
    <PageLayout>
      <Text>Who are you?</Text>

      {/*<ScrollView>*/}
      {/*    {factions.map((faction) => (*/}
      {/*        <TouchableOpacity*/}
      {/*            key={faction.id}*/}
      {/*            className={`bg-${faction.color}-800 px-4 py-3 mb-3 rounded-lg`}*/}
      {/*            onPress={() => navigation.navigate('LoyaltySelect', { faction })}*/}
      {/*        >*/}
      {/*            <Text className="text-white text-lg">{faction.name}</Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*    ))}*/}
      {/*</ScrollView>*/}
    </PageLayout>
  );
}
