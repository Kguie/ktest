import { Card } from "@rneui/themed";
import { View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

import { PhotoProps } from "../../utils/photos";
import { DEFAULT_ROUNDNESS, margins } from "../../config/theme";
import { getViewHeight } from "../../utils";

type Props = {
  post: PhotoProps;
};

export default function PostCard({ post }: Props) {
  return (
    <Card>
      <View>
        <Card.Image
          resizeMode="contain"
          style={{ aspectRatio: post.width / post.height, flex: 1 }}
          src={post.url}
        />
      </View>
      <View>
        <Text>{post.author}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: DEFAULT_ROUNDNESS + margins.xSmall,
    flexDirection: "column",
    minHeight: getViewHeight(10),
    overflow: "hidden",
  },
});
