import { useState } from "react";
import { useGetQuery } from "../../queries/useGetQuery";
import { AddStylist } from "./AddStylist";
import { StylistInfo } from "./StylistInfo";
import { Container } from "../styles/Container";
import { HeaderElements } from "../HeaderElements";
import { StyledList } from "../styles/StyledList";

export const StylistsPanel = () => {
  const { data, isFetching } = useGetQuery("stylists");
  const [activeTab, setActiveTab] = useState("list");

  if (!data) return <p>No data</p>;

  return (
    <Container>
      <HeaderElements
        title="Stylists"
        onClickList={() => setActiveTab("list")}
        onClickAdd={() => setActiveTab("add")}
        activeList={activeTab === "list"}
        activeAdd={activeTab === "add"}
      />
      {activeTab === "list" && (
        <StyledList>
          {isFetching && <p>Loading...</p>}
          {data.map((element) => (
            <StylistInfo stylist={element} key={element.id} />
          ))}
        </StyledList>
      )}
      {activeTab === "add" && <AddStylist />}
    </Container>
  );
};
