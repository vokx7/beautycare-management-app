import { useState } from "react";
import { useGetQuery } from "../../queries/useGetQuery";
import { AddTreatmentType } from "./AddTreatmentType";
import { TreatmentTypeInfo } from "./TreatmentTypeInfo";
import { Container } from "../styles/Container";
import { HeaderElements } from "../HeaderElements";
import { StyledList } from "../styles/StyledList";

export const TreatmentTypesPanel = () => {
  const { data, isFetching } = useGetQuery("treatmentTypes");
  const [activeTab, setActiveTab] = useState("list");

  if (!data) return <p>No data</p>;

  return (
    <Container>
      <HeaderElements
        title="Services"
        onClickList={() => setActiveTab("list")}
        onClickAdd={() => setActiveTab("add")}
        activeList={activeTab === "list"}
        activeAdd={activeTab === "add"}
      />
      {activeTab === "list" && (
        <StyledList>
          {isFetching && <p>Loading...</p>}
          {data.map((element) => (
            <TreatmentTypeInfo treatmentType={element} key={element.id} />
          ))}
        </StyledList>
      )}

      {activeTab === "add" && <AddTreatmentType />}
    </Container>
  );
};
