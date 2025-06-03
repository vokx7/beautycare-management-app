import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useGetStylistsQuery = () => {
  const { apiGet } = useApi();

  const { data, isFetching } = useQuery({
    queryKey: ["stylists"],
    queryFn: async () => {
      return apiGet("stylists");
    },
  });

  return {
    data,
    isFetching,
  };
};
