import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";
import PageLayout from "../components/pagelayout/PageLayout";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <PageLayout>
      <View>
        <Button
          title="New"
          onPress={() => router.push("/(tabs)/factionSelectScreen")}
        />
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
