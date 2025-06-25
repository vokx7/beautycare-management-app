import { useState } from "react";
import { useGetQuery } from "../../queries/useGetQuery";
import { HeaderElements } from "../HeaderElements";
import { Container } from "../styles/Container";
import { AddTreatment } from "./AddTreatment";
import { TreatmentInfo } from "./TreatmentInfo";
import { StyledList } from "../styles/StyledList";

export const TreatmentsPanel = () => {
  const { data: treatments, isFetching: fetchingTreatments } =
    useGetQuery("treatments");
  const { data: treatmentTypes, isFetching: fetchingTreatmentTypes } =
    useGetQuery("treatmentTypes");
  const { data: clients, isFetching: fetchingClients } = useGetQuery("clients");
  const { data: stylists, isFetching: fetchingStylists } =
    useGetQuery("stylists");

  const [activeTab, setActiveTab] = useState("list");

  if (!treatments || !treatmentTypes || !clients || !stylists)
    return <p>No data</p>;

  return (
    <Container>
      <HeaderElements
        title="History"
        onClickList={() => setActiveTab("list")}
        onClickAdd={() => setActiveTab("add")}
        activeList={activeTab === "list"}
        activeAdd={activeTab === "add"}
      />
      {activeTab === "list" && (
        <StyledList>
          {(fetchingTreatments ||
            fetchingTreatmentTypes ||
            fetchingClients ||
            fetchingStylists) && <p>Loading...</p>}
          {treatments.map((element) => (
            <TreatmentInfo
              treatment={element}
              treatmentTypes={treatmentTypes}
              clients={clients}
              stylists={stylists}
              key={element.id}
            />
          ))}
        </StyledList>
      )}
      {activeTab === "add" && (
        <AddTreatment
          treatmentTypes={treatmentTypes}
          clients={clients}
          stylists={stylists}
        />
      )}
    </Container>
  );
};
