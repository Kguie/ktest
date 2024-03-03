import { Text, Image, Skeleton } from "@rneui/themed";
import { Animated, View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { useMemo } from "react";

import { PhotoProps } from "../../utils/photos";
import { DEFAULT_ROUNDNESS, margins } from "../../config/theme";
import { getViewHeight } from "../../utils";

type Props = {
  post: PhotoProps;
  isLoading: boolean;
  y: Animated.Value;
  index: number;
};

const DEFAULT_CARD_HEIGHT = getViewHeight(35);
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + margins.medium;

const DEFAULT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur, tellus vel pulvinar vestibulum, elit erat posuere nisl, ac tincidunt libero nunc eget orci. In metus libero, mattis sed leo ut, tristique dictum est. Nam blandit pellentesque condimentum. Pellentesque nec metus quis nisi eleifend maximus eget sit amet lectus. Etiam id pellentesque metus, sit amet mattis nunc. Fusce condimentum semper venenatis. Ut placerat euismod mauris, sit amet porttitor tellus vestibulum pretium leo.";

export default function PostCard({ post, isLoading, y, index }: Props) {
  const { height: screenHeight } = Dimensions.get("window");
  const height = screenHeight - 10;

  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.01 + index * CARD_HEIGHT],
      outputRange: [0, -index * CARD_HEIGHT],
      extrapolateRight: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  const text: string = useMemo(() => {
    return DEFAULT_TEXT.split(" ")
      .slice(Math.random() * 100)
      .toString();
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.card,
        opacity,
        transform: [{ translateY }, { scale }],
      }}
      key={index}>
      <View style={styles.imageCard}>
        {isLoading ? (
          <Skeleton height={getViewHeight(20)} />
        ) : (
          <Image
            resizeMethod="scale"
            resizeMode="cover"
            height={getViewHeight(20)}
            style={{ aspectRatio: 1 }}
            alt={"post-" + post.id}
            source={{ uri: post.download_url }}
          />
        )}
      </View>
      <View style={styles.bodyCard}>
        {isLoading ? (
          <Skeleton height={16} width={"50%"} />
        ) : (
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {post.author}
          </Text>
        )}
        {isLoading ? (
          <Skeleton
            height={16}
            width={"100%"}
            style={{ height: getViewHeight(10) }}
          />
        ) : (
          <Text style={{ fontSize: 14 }}>{text}</Text>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: DEFAULT_ROUNDNESS + margins.xSmall,
    flexDirection: "column",
    height: DEFAULT_CARD_HEIGHT,
    overflow: "hidden",
    backgroundColor: "white",
  },
  imageCard: {
    height: getViewHeight(20),
    backgroundColor: "black",
    overflow: "hidden",
  },
  bodyCard: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: margins.small,
    gap: margins.small,
    height: getViewHeight(10),
  },
});
