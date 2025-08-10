import { ReactNode } from "react";
import { Text as RNText } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function Text({ children }: { children: ReactNode }) {
  return <RNText style={styles.text}>{children}</RNText>;
}

const styles = StyleSheet.create((theme) => ({
  text: {
    color: theme.colors.appForeground,
    fontSize: 16,
    lineHeight: 24,
    marginVertical: theme.gap(0.5),
  },
}));
