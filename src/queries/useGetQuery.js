import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useGetQuery = (url) => {
  const { apiGet } = useApi();

  const { data, isFetching } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      return apiGet(url);
    },
  });

  return {
    data,
    isFetching,
  };
};
