import { useDeleteTreatmentsMutation } from "../../queries/useDeleteTreatmentsMutation";
import { StyledButtonDelete } from "../styles/StyledButtonDelete";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";

export const DeleteTreatmentConfirmation = ({ onCancel, treatment }) => {
  const { mutate, isPending } = useDeleteTreatmentsMutation(treatment.id);

  if (isPending) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Do you really want to{" "}
        <span style={{ color: "#914141", fontWeight: "bold" }}>delete</span>{" "}
        this record?
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <StyledButtonDelete onClick={() => mutate()}>Delete</StyledButtonDelete>
        <StyledButtonEdit onClick={onCancel}>Cancel</StyledButtonEdit>
      </div>
    </div>
  );
};
