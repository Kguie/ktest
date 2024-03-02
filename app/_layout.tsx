import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  ColorSchemeName,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "@rneui/themed";

import { queryClient } from "../hooks/api";
import { theme } from "../config/theme";
import Navigator from "../components/navigator/navigator";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigator />
            <StatusBar style="auto" />
            <FlashMessage position="top" />
          </SafeAreaProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
