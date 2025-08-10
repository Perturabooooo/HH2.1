import { StyleSheet } from "react-native-unistyles";

type ThemeConfig = {
  colors: {
    appBackground: string;
    appForeground: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  gap: (v: number) => number;
};

const lightTheme: ThemeConfig = {
  colors: {
    appBackground: "#fefefe",
    appForeground: "#232323",
    primary: "#007AFF",
    secondary: "#5856D6",
    accent: "#FF9500",
  },
  gap: (v: number) => v * 8,
};

const darkTheme: ThemeConfig = {
  colors: {
    appBackground: "#232323",
    appForeground: "#fefefe",
    primary: "#007AFF",
    secondary: "#5856D6",
    accent: "#FF9500",
  },
  gap: (v: number) => v * 8,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: () => {
      return "light";
    },
  },
  breakpoints,
  themes: appThemes,
});
