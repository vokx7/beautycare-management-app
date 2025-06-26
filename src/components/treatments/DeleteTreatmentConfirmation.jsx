import { useDeleteTreatmentsMutation } from "../../queries/useDeleteTreatmentsMutation";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";

export const DeleteTreatmentConfirmation = ({ onCancel, treatment }) => {
  const { mutate, isPending } = useDeleteTreatmentsMutation(treatment.id);

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <p>Do you really want to delete this record?</p>
      <StyledButtonEdit onClick={() => mutate()}>Delete</StyledButtonEdit>
      <StyledButtonEdit onClick={onCancel}>Cancel</StyledButtonEdit>
    </div>
  );
};
