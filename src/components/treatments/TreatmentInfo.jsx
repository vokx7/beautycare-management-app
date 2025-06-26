import { useState } from "react";
import { EditTreatment } from "./EditTreatment";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { SlPencil } from "react-icons/sl";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoDiv } from "../styles/StyledInfoDiv";

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

  const stylist = stylists.find((s) => s.id === treatment.stylistId);
  const client = clients.find((c) => c.id === treatment.clientId);
  const treatmentType = treatmentTypes.find(
    (t) => t.id === treatment.treatmentTypeId
  );

  return (
    <StyledInfoBox>
      <StyledInfoDiv>
        <div>
          <p style={{ margin: 0, "margin-bottom": "4px" }}>
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
        <StyledButtonEdit onClick={toggleEditMode}>
          {mode === "edit" ? (
            "Cancel"
          ) : (
            <>
              <SlPencil />
              Edit
            </>
          )}
        </StyledButtonEdit>
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
    </StyledInfoBox>
  );
};
