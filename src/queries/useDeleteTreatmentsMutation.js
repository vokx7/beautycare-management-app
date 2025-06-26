import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useDeleteTreatmentsMutation = (treatmentId) => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["treatments", "delete", treatmentId],
    mutationFn: async () => {
      return apiDelete(`treatments/${treatmentId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["treatments"],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
