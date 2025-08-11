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

const darkAngelsTheme: ThemeConfig = {
    colors: {
        appBackground: "",
        appForeground: "",
        primary: "#10100e",
        secondary: "#af2310",
        accent: "#d2d2d0",
    },
    gap: (v: number) => v * 8,
};
const emperorsChildrenTheme: ThemeConfig = {
    colors: {
        appBackground: "",
        appForeground: "",
        primary: "#675b83",
        secondary: "#ededed",
        accent: "#f5d68a",
    },
    gap: (v: number) => v * 8,
};
const ironWarriorsTheme: ThemeConfig = {
    colors: {
        appBackground: "",
        appForeground: "",
        primary: "#97959e",
        secondary: "#272628",
        accent: "#ba7e40",
    },
    gap: (v: number) => v * 8,
};
const whiteScarsTheme: ThemeConfig = {
    colors: {
        appBackground: "",
        appForeground: "",
        primary: "#e6e8e6",
        secondary: "#87403a",
        accent: "#d0b39c",
    },
    gap: (v: number) => v * 8,
};
const spaceWolvesTheme: ThemeConfig = {
    colors: {
        appBackground: "",
        appForeground: "",
        primary: "#687384",
        secondary: "#cda98c",
        accent: "#b25046",
    },
    gap: (v: number) => v * 8,
};
const imperialFistsTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#ffa72f",
        secondary: "#181417",
        accent: "#862322",
    },
    gap: (v: number) => v * 8,
};
const nightLordsTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#152441",
        secondary: "#791434",
        accent: "#a2997e",
    },
    gap: (v: number) => v * 8,
};
const bloodAngelsTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#b03b3e",
        secondary: "#292a29",
        accent: "#f49743",
    },
    gap: (v: number) => v * 8,
};
const ironHandsTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#292929",
        secondary: "#93918d",
        accent: "#742726",
    },
    gap: (v: number) => v * 8,
};
const worldEatersTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#edeee6",
        secondary: "#70bfde",
        accent: "#84372e",
    },
    gap: (v: number) => v * 8,
};
const ultramarinesTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#363c6e",
        secondary: "#bfaa95",
        accent: "#161117",
    },
    gap: (v: number) => v * 8,
};
const deathGuardTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#e3d9c8",
        secondary: "#828e6e",
        accent: "#7b7771",
    },
    gap: (v: number) => v * 8,
};
const thousandSunsTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#a5242b",
        secondary: "#e2e2e2",
        accent: "#e09d78",
    },
    gap: (v: number) => v * 8,
};
const sonsofHorusTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#639085",
        secondary: "#302e2f",
        accent: "#f2dfbb",
    },
    gap: (v: number) => v * 8,
};
const wordBearersTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#86373c",
        secondary: "#1b1417",
        accent: "#84888d",
    },
    gap: (v: number) => v * 8,
};
const salamandersTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#404f43",
        secondary: "#0a0e12",
        accent: "#ebb77c",
    },
    gap: (v: number) => v * 8,
};
const ravenGuardTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#0d0d0f",
        secondary: "#d0dadf",
        accent: "#afaaa4",
    },
    gap: (v: number) => v * 8,
};
const alphaLegionTheme: ThemeConfig = {
    colors: {
        appBackground: "#",
        appForeground: "#",
        primary: "#164a55",
        secondary: "#afaeaa",
        accent: "#aac4cf",
    },
    gap: (v: number) => v * 8,
};