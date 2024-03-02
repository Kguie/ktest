import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetPhotos } from "../../hooks/api/photos";
import { useEffect } from "react";

export default function AnimatedFlatList() {
  const { data } = useGetPhotos();

  return (
    <ScrollView>
      <SafeAreaView edges={["bottom"]}>
        <FlatList data={data} renderItem={undefined} />
      </SafeAreaView>
    </ScrollView>
  );
}
