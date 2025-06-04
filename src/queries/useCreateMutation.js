import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useCreateMutation = (url) => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [url, "create"],
    mutationFn: async (payload) => {
      return apiPost(url, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [url],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
