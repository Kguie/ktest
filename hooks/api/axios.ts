import {
  QueriesOptions,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { parseTemplate } from "url-template";

import axios from "../../config/axios";

import { queryClient } from ".";

// export function useGet<ResultType>(
//   path: string | null,
//   options?: UseQueryOptions<ResultType, Error, ResultType>
// ) {
//   return useQuery<ResultType, Error>(
//     (path || "??").split("/"),
//     async (payload: any) => {
//       if (path) {
//         const url = parseTemplate(path).expand(payload);
//         const { data } = await axios.get(url);
//         return data;
//       } else return null;
//     },
//     options
//   );
// }

export function useGet<ResultType>(
  path: string,
  key: string,
  options?: UseQueryOptions<ResultType, Error, ResultType>
) {
  async function get(payload?: any) {
    if (path) {
      const url = parseTemplate(path);
      try {
        const { data } = await axios.get(path);
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    } else return null;
  }
  return useQuery({
    queryKey: [key],
    queryFn: () => get(),
    ...options,
  });
}
