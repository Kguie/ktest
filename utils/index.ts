import { Dimensions } from "react-native";

export function getViewHeight(height: number): number {
  const convertedHeight: number =
    (Dimensions.get("window").height * height) / 100;
  return convertedHeight;
}
