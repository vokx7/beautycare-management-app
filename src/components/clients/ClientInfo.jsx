import { useState } from "react";
import { EditClient } from "./EditClient";
import styled from "styled-components";
import avatar from "../../assets/avatar.png";
import { SlPencil } from "react-icons/sl";
import { StyledButtonEdit } from "../styles/StyledButtonEdit";
import { StyledInfoBox } from "../styles/StyledInfoBox";
import { StyledAvatar } from "../styles/StyledAvatar";

const StyledDetails = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  letter-spacing: 1px;
`;

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
        <StyledDetails>tel. {client.phone}</StyledDetails>
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
        {mode === "edit" ? <EditClient client={client} /> : undefined}
      </div>
      <StyledAvatar src={avatar} alt="user-avatar" />
    </StyledInfoBox>
  );
};
