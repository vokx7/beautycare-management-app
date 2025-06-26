import { useState } from "react";
import { EditClient } from "./EditClient";
import avatar from "../../assets/avatar.png";
import { SlPencil } from "react-icons/sl";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledAvatar } from "../styles/StyledAvatar";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";
import { StyledInfoDiv } from "../styles/StyledInfoDiv";
import { StyledAvatarTitleDiv } from "../styles/StyledAvatarTitleDiv";

export const ClientInfo = ({ client }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledInfoBox>
      <StyledInfoDiv>
        <StyledAvatarTitleDiv>
          <StyledAvatar src={avatar} alt="user-avatar" />
          <div>
            <p style={{ margin: 0, "margin-bottom": "4px" }}>
              {client.firstName} {client.lastName}
            </p>
            <StyledInfoDetails>tel. {client.phone}</StyledInfoDetails>
          </div>
        </StyledAvatarTitleDiv>
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
        <EditClient client={client} onSuccess={() => setMode("none")} />
      ) : null}
    </StyledInfoBox>
  );
};
