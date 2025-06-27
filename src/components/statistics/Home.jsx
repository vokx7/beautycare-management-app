import styled from "styled-components";
import { Container } from "../styles/Container";
import { useGetQuery } from "../../queries/useGetQuery";
import { RecentAppointmentBox } from "./RecentAppointmentBox";
import { Top3TreatmentTypes } from "./Top3TreatmentTypes";

const Heading = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-family: Italiana;
  letter-spacing: 1.2px;
  word-wrap: break-word;
`;

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  letter-spacing: 1.2px;
`;

export const Home = () => {
  const { data: treatments, isFetching: fetchingTreatments } =
    useGetQuery("treatments");
  const { data: treatmentTypes, isFetching: fetchingTreatmentTypes } =
    useGetQuery("treatmentTypes");
  const { data: clients, isFetching: fetchingClients } = useGetQuery("clients");
  const { data: stylists, isFetching: fetchingStylists } =
    useGetQuery("stylists");

  if (!treatments || !treatmentTypes || !clients || !stylists)
    return <p>No data</p>;

  return (
    <Container>
      <Heading>
        Beauty Care
        <br /> Manager
      </Heading>
      <SectionTitle>Overview</SectionTitle>
      {(fetchingTreatments ||
        fetchingTreatmentTypes ||
        fetchingClients ||
        fetchingStylists) && <p>Loading...</p>}
      <RecentAppointmentBox
        treatments={treatments}
        treatmentTypes={treatmentTypes}
        clients={clients}
        stylists={stylists}
      />
      <Top3TreatmentTypes
        treatments={treatments}
        treatmentTypes={treatmentTypes}
      />
    </Container>
  );
};
