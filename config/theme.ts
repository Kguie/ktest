import { createTheme, darkColors, lightColors } from "@rneui/themed";

export const DEFAULT_ROUNDNESS = 12;

export const theme = createTheme({
  lightColors: {
    ...lightColors,
  },
  darkColors: {
    ...darkColors,
  },
  mode: "light",
  components: {
    Button: {
      radius: DEFAULT_ROUNDNESS,
    },
  },
});

export const margins = {
  xLarge: 48,
  large: 32,
  medium: 24,
  small: 16,
  xSmall: 8,
};
