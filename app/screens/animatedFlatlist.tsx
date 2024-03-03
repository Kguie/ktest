// import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView, FlatList, Animated } from "react-native";

import { useGetPhotos } from "../../hooks/api/photos";
import { margins } from "../../config/theme";
import PostCard from "../../components/posts/postCard";
import { PhotoProps } from "../../utils/photos";
import { useCallback, useMemo } from "react";

const COUNT_TO_RENDER: number = 1;

export default function AnimatedFlatList() {
  const { data, isLoading, isRefetching, refetch } = useGetPhotos();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<any>);

  const postsCardSkeletonData: PhotoProps[] = useMemo(() => {
    let resultArray: PhotoProps[] = [];
    for (let i = 1; i <= 5; i++) {
      resultArray.push({
        url: "",
        download_url: "",
        id: `skeleton${i}`,
        author: "",
        height: 1,
        width: 1,
      });
    }
    return resultArray;
  }, []);

  const dataToDisplay: PhotoProps[] = useMemo(() => {
    return isLoading ? postsCardSkeletonData : data;
  }, [isLoading]);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <AnimatedFlatList
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContainer}
        bounces={false}
        // maxToRenderPerBatch={COUNT_TO_RENDER}
        // initialNumToRender={COUNT_TO_RENDER}
        // onEndReachedThreshold={0.03}
        style={{ flex: 1 }}
        data={dataToDisplay}
        onRefresh={() => refetch()}
        refreshing={isRefetching}
        renderItem={({
          item,
          index,
        }: {
          item: PhotoProps;
          index: number;
        }): any => (
          <PostCard
            key={"post-" + item.id}
            isLoading={isLoading}
            post={item}
            y={y}
            index={index}
          />
        )}
        {...{ onScroll }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: margins.small,
    paddingHorizontal: margins.xSmall,
    flex: 1,
    backgroundColor: "grey",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: margins.medium,
    paddingBottom: margins.medium,
  },
});
