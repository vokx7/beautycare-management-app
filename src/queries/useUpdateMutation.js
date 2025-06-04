import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useUpdateMutation = (url, elementId) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [url, "update", elementId],
    mutationFn: async (payload) => {
      return apiPut(`${url}/${elementId}`, payload);
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
