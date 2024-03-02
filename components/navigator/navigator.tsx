import { useThemeMode } from "@rneui/themed";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

export default function Navigator() {
  const { setMode } = useThemeMode();
  const themeMode: ColorSchemeName = useColorScheme();
  // useEffect(() => {
  //   if (themeMode?.includes("dark")) {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // }, [themeMode]);

  useEffect(() => {
    router.replace("/screens/home");
  }, []);

  return (
    <Stack>
      <Stack.Screen name="screens/home" options={{ headerTitle: "Home" }} />
      <Stack.Screen
        name="screens/animatedFlatlist"
        options={{ headerTitle: "Animated Flat List" }}
      />
    </Stack>
  );
}
