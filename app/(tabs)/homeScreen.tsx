import PageLayout from "@/app/components/pagelayout/pagelayout";
import Text from "@/app/components/text/Text";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <PageLayout>
      <TouchableOpacity>
        <Text>New</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Saved</Text>
      </TouchableOpacity>
      <View>
        <Button
          title="Light Mode"
          onPress={() => UnistylesRuntime.setTheme("light")}
        />
        <Button
          title="Dark Mode"
          onPress={() => UnistylesRuntime.setTheme("dark")}
        />
      </View>
    </PageLayout>
  );
}
// onPress={() => navigation.navigate('FactionSelect')}
