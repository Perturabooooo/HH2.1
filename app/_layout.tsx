import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";
import StatusBar from "./components/statusBar/StatusBar";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    backgroundColor: theme.colors.appBackground,
    flex: 1,
    padding: 16,
  },
}));
