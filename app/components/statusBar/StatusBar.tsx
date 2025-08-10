import { StatusBar as RNStatusBar } from "react-native";
import { useUnistyles } from "react-native-unistyles";

export default function StatusBar() {
  const { rt } = useUnistyles();

  console.log("StatusBar rendered");
  const statusBarStyle =
    rt.themeName === "dark" ? "light-content" : "dark-content";

  return (
    <RNStatusBar
      translucent
      backgroundColor="transparent"
      barStyle={statusBarStyle}
    />
  );
}
