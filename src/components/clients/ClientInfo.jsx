import { useState } from "react";
import { EditClient } from "./EditClient";
import styled from "styled-components";
import avatar from "../../assets/avatar.png";
import { SlPencil } from "react-icons/sl";

const StyledPersonbox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3.525423526763916px 3.525423526763916px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const StyledDetails = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  letter-spacing: 1px;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.bacgroundSecondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 40px;
  padding: 6px 0;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const StyledAvatar = styled.img`
  width: 30%;
`;

export const ClientInfo = ({ client }) => {
  const [mode, setMode] = useState("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <StyledPersonbox>
      <div>
        <p>
          {client.firstName} {client.lastName}
        </p>
        <StyledDetails>tel. {client.phone}</StyledDetails>
        <StyledButton onClick={toggleEditMode}>
          {mode === "edit" ? (
            "Cancel"
          ) : (
            <>
              <SlPencil />
              Edit
            </>
          )}
        </StyledButton>
        {mode === "edit" ? <EditClient client={client} /> : undefined}
      </div>
      <StyledAvatar src={avatar} alt="user-avatar" />
    </StyledPersonbox>
  );
};
