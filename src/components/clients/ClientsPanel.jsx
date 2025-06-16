import styled from "styled-components";
import { useGetQuery } from "../../queries/useGetQuery";
import { AddClient } from "./AddClient";
import { ClientInfo } from "./ClientInfo";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Heading = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-family: Italiana;
  letter-spacing: 1.2px;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 74px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  max-height: 700px;
  overflow-y: auto;
`;

const StyledButton = styled.button`
  background: ${({ active }) => (active ? "#914141" : "#F5F7FA")};
  color: ${({ active }) => (active ? "#fff" : "#222222")};
  border-radius: 40px;
  padding: 10px 0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  max-width: 200px;
  width: 100%;
`;

export const ClientsPanel = () => {
  const { data, isFetching } = useGetQuery("clients");
  const [activeTab, setActiveTab] = useState("list");

  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data</p>;

  return (
    <Container>
      <Heading>Clients</Heading>
      <ButtonContainer>
        <StyledButton
          active={activeTab === "list"}
          onClick={() => setActiveTab("list")}
        >
          List
        </StyledButton>
        <StyledButton
          active={activeTab === "add"}
          onClick={() => setActiveTab("add")}
        >
          Add new
        </StyledButton>
      </ButtonContainer>
      {activeTab === "list" && (
        <StyledList>
          {data.map((element) => (
            <ClientInfo client={element} key={element.id} />
          ))}
        </StyledList>
      )}
      {activeTab === "add" && <AddClient />}
    </Container>
  );
};
