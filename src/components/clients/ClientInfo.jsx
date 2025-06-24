import { useState } from "react";
import { EditClient } from "./EditClient";
import avatar from "../../assets/avatar.png";
import { SlPencil } from "react-icons/sl";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledAvatar } from "../styles/StyledAvatar";
import { StyledInfoDetails } from "../styles/StyledInfoDetails";

export const ClientInfo = ({ client }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledInfoBox>
      <div>
        <p>
          {client.firstName} {client.lastName}
        </p>
        <StyledInfoDetails>tel. {client.phone}</StyledInfoDetails>
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
          <EditClient client={client} onSuccess={() => setMode("none")} />
        ) : null}
      </div>
      <StyledAvatar src={avatar} alt="user-avatar" />
    </StyledInfoBox>
  );
};
