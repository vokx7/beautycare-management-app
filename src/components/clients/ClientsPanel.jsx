import { useGetQuery } from "../../queries/useGetQuery";
import { AddClient } from "./AddClient";
import { ClientInfo } from "./ClientInfo";
import { useState } from "react";
import { HeaderElements } from "../HeaderElements";
import { StyledList } from "../styles/StyledList";
import { Container } from "../styles/Container";

export const ClientsPanel = () => {
  const { data, isFetching } = useGetQuery("clients");
  const [activeTab, setActiveTab] = useState("list");

  if (isFetching) return <p>Loading...</p>;

  if (!data) return <p>No data</p>;

  return (
    <Container>
      <HeaderElements
        title="Clients"
        onClickList={() => setActiveTab("list")}
        onClickAdd={() => setActiveTab("add")}
        activeList={activeTab === "list"}
        activeAdd={activeTab === "add"}
      />
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
