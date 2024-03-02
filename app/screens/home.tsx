import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

import { margins } from "../../config/theme";
import { StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.wrapper} edges={["bottom"]}>
        <Button
          title={"Animated FlatList"}
          onPress={() => router.navigate("screens/animatedFlatlist")}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: margins.xSmall,
    paddingVertical: margins.small,
  },
});
