import { useState } from "react";
import { EditTreatmentType } from "./EditTreatmentType";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { SlPencil } from "react-icons/sl";
import { StyledAvatar } from "../styles/StyledAvatar";
import item from "../../assets/item.png";

export const TreatmentTypeInfo = ({ treatmentType }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledInfoBox>
      <div>
        <p> {treatmentType.name}</p>
        <StyledInfoDetails>{treatmentType.duration}mins</StyledInfoDetails>
        <StyledInfoDetails>{treatmentType.price}$</StyledInfoDetails>

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
          <EditTreatmentType
            treatmentType={treatmentType}
            onSuccess={() => setMode("none")}
          />
        ) : null}
      </div>
      <StyledAvatar src={item} alt="item" />
    </StyledInfoBox>
  );
};
