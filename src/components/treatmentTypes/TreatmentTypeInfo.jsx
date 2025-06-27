import { useState } from "react";
import { EditTreatmentType } from "./EditTreatmentType";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { SlPencil } from "react-icons/sl";
import { StyledInfoDiv } from "../styles/StyledInfoDiv";
import { StyledInfoBox } from "../styles/StyledInfoBox";

export const TreatmentTypeInfo = ({ treatmentType }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledInfoBox>
      <StyledInfoDiv>
        <div>
          <p style={{ margin: 0, marginBottom: "4px" }}>
            {" "}
            {treatmentType.name}
          </p>
          <StyledInfoDetails>
            {treatmentType.price}$ - {treatmentType.duration}mins <br />{" "}
            {treatmentType.specialty}
          </StyledInfoDetails>
        </div>
        <StyledButtonEdit
          onClick={toggleEditMode}
          width="30px"
          $active={mode === "edit"}
        >
          <SlPencil />
        </StyledButtonEdit>
      </StyledInfoDiv>
      {mode === "edit" ? (
        <EditTreatmentType
          treatmentType={treatmentType}
          onSuccess={() => setMode("none")}
        />
      ) : null}
    </StyledInfoBox>
  );
};
