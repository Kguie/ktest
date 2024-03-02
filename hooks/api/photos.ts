import { UseQueryOptions } from "@tanstack/react-query";
import { useGet } from "./axios";
import { PhotoProps } from "../../utils/photos";

export function useGetPhotos(
  options?: UseQueryOptions<unknown, Error, unknown>
) {
  return useGet<any>("https://picsum.photos/v2/list", "medias", options);
}
