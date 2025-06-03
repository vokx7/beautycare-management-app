import { useMutation } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";

export const useCreateStylistMutation = () => {
  const { apiPost } = useApi();

  const { mutate, isPending } = useMutation({
    mutationKey: ["stylists", "create"],
    mutationFn: async (payload) => {
      return apiPost("stylists", payload);
    },
  });

  return {
    mutate,
    isPending,
  };
};
