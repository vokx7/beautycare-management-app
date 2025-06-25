import { useState } from "react";
import { EditTreatment } from "./EditTreatment";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import history from "../../assets/history.png";
import { SlPencil } from "react-icons/sl";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledAvatar } from "../styles/StyledAvatar";

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
      <div>
        <p> {treatmentType?.name} </p>
        <StyledInfoDetails>
          Stylist: {stylist?.firstName} {stylist?.lastName}
        </StyledInfoDetails>
        <StyledInfoDetails>
          Client: {client?.firstName} {client?.lastName}
        </StyledInfoDetails>
        <StyledInfoDetails>Date: {treatment.date}</StyledInfoDetails>
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
        {mode === "edit" ? (
          <EditTreatment
            treatment={treatment}
            treatmentTypes={treatmentTypes}
            clients={clients}
            stylists={stylists}
            onSuccess={() => setMode("none")}
          />
        ) : null}
      </div>
      <StyledAvatar src={history} alt="history-avatar" />
    </StyledInfoBox>
  );
};
