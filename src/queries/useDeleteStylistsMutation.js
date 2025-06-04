import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useDeleteStylistsMutation = (stylistId) => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["stylists", "delete", stylistId],
    mutationFn: async () => {
      return apiDelete(`stylists/${stylistId}`);
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
