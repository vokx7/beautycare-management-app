import { useState } from "react";
import { EditTreatment } from "./EditTreatment";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { SlPencil, SlTrash } from "react-icons/sl";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoDiv } from "../styles/StyledInfoDiv";
import { DeleteTreatmentConfirmation } from "./DeleteTreatmentConfirmation";

export const TreatmentInfo = ({
  treatment,
  treatmentTypes,
  clients,
  stylists,
}) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };

  const stylist = stylists.find((s) => s.id === treatment.stylistId);
  const client = clients.find((c) => c.id === treatment.clientId);
  const treatmentType = treatmentTypes.find(
    (t) => t.id === treatment.treatmentTypeId
  );

  return (
    <StyledInfoBox>
      <StyledInfoDiv $alignItems="flex-start">
        <div>
          <p style={{ margin: 0, marginBottom: "4px" }}>
            {" "}
            {treatmentType?.name}{" "}
          </p>
          <StyledInfoDetails>
            Stylist: {stylist?.firstName} {stylist?.lastName}
          </StyledInfoDetails>
          <StyledInfoDetails>
            Client: {client?.firstName} {client?.lastName}
          </StyledInfoDetails>
          <StyledInfoDetails>Date: {treatment.date}</StyledInfoDetails>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <StyledButtonEdit
            $active={mode === "edit"}
            onClick={toggleEditMode}
            width="30px"
          >
            <SlPencil />
          </StyledButtonEdit>
          <StyledButtonEdit
            $active={mode === "delete"}
            onClick={toggleDeleteMode}
            width="30px"
          >
            <SlTrash />
          </StyledButtonEdit>
        </div>
      </StyledInfoDiv>
      {mode === "edit" ? (
        <EditTreatment
          treatment={treatment}
          treatmentTypes={treatmentTypes}
          clients={clients}
          stylists={stylists}
          onSuccess={() => setMode("none")}
        />
      ) : null}
      {mode === "delete" ? (
        <DeleteTreatmentConfirmation
          onCancel={toggleDeleteMode}
          treatment={treatment}
        />
      ) : undefined}
    </StyledInfoBox>
  );
};
