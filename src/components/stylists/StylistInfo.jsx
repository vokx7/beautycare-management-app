import { useState } from "react";
import { EditStylist } from "./EditStylist";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledAvatar } from "../styles/StyledAvatar";
import { SlPencil } from "react-icons/sl";
import avatar2 from "../../assets/avatar2.png";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledInfoDiv } from "../styles/StyledInfoDiv";
import { StyledAvatarTitleDiv } from "../styles/StyledAvatarTitleDiv";

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
      <StyledInfoDiv>
        <StyledAvatarTitleDiv>
          <StyledAvatar src={avatar2} alt="stylist-avatar" />
          <div>
            <p style={{ margin: 0, marginBottom: "4px" }}>
              {stylist.firstName} {stylist.lastName}
            </p>
            <StyledInfoDetails>{stylist.specialty}</StyledInfoDetails>
          </div>
        </StyledAvatarTitleDiv>
        <StyledButtonEdit
          onClick={toggleEditMode}
          width="30px"
          $active={mode === "edit"}
        >
          <SlPencil />
        </StyledButtonEdit>

        {/* <button onClick={toggleDeleteMode}>{mode === 'delete' ? 'Cancel' : 'Delete'}</button>
            {mode === 'delete' ? <DeleteStylistConfirmation onCancel={toggleDeleteMode} stylist={stylist}/> : undefined} */}
      </StyledInfoDiv>
      {mode === "edit" ? (
        <EditStylist stylist={stylist} onSuccess={() => setMode("none")} />
      ) : null}
    </StyledInfoBox>
  );
};
