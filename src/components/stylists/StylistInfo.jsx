import { useState } from "react";
import { EditStylist } from "./EditStylist";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledAvatar } from "../styles/StyledAvatar";
import { SlPencil } from "react-icons/sl";
import avatar2 from "../../assets/avatar2.png";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";

// import { DeleteStylistConfirmation } from "./DeleteStylistConfirmation";

export const StylistInfo = ({ stylist }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  // const toggleDeleteMode = () => {
  //   setMode(prevMode => prevMode === "delete" ? "none" : "delete");
  // }

  return (
    <StyledInfoBox>
      <div>
        <p>
          {" "}
          {stylist.firstName} {stylist.lastName}
        </p>
        <StyledInfoDetails>{stylist.specialty}</StyledInfoDetails>
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
        {mode === "edit" ? <EditStylist stylist={stylist} /> : undefined}
        {/* <button onClick={toggleDeleteMode}>{mode === 'delete' ? 'Cancel' : 'Delete'}</button>
            {mode === 'delete' ? <DeleteStylistConfirmation onCancel={toggleDeleteMode} stylist={stylist}/> : undefined} */}
      </div>
      <StyledAvatar src={avatar2} alt="stylist-avatar" />
    </StyledInfoBox>
  );
};
