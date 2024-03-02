// import { StatusBar } from "expo-status-bar";
// import React, { useEffect } from "react";
// import {
//   ColorSchemeName,
//   StyleSheet,
//   Text,
//   View,
//   useColorScheme,
// } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { QueryClientProvider } from "@tanstack/react-query";
// import FlashMessage from "react-native-flash-message";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { ThemeMode, ThemeProvider, useThemeMode } from "@rneui/themed";

// import { queryClient } from "./hooks/api";
// import { theme } from "./config/theme";

// export default function App() {
//   const { setMode } = useThemeMode();
//   const themeMode: ColorSchemeName = useColorScheme();
//   useEffect(() => {
//     if (themeMode?.includes("dark")) {
//       setMode("dark");
//     } else {
//       setMode("light");
//     }
//   }, [themeMode]);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider theme={theme}>
//           <SafeAreaProvider>
//             <View style={styles.container}>
//               <Text style={{ color: "white" }}>
//                 Open up App.tsx to start working on your app!
//               </Text>
//               <StatusBar style="auto" />
//             </View>
//             <StatusBar style="auto" />
//             <FlashMessage position="top" />
//           </SafeAreaProvider>
//         </ThemeProvider>
//       </QueryClientProvider>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
