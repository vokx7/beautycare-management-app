import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useUpdateStylistMutation = (stylistId) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["stylists", "update", stylistId],
    mutationFn: async (payload) => {
      return apiPut(`stylists/${stylistId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stylists"],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
