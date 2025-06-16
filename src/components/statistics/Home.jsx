import styled from "styled-components";
import { Container } from "../styles/Container";

const Heading = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-family: Italiana;
  letter-spacing: 1.2px;
  word-wrap: break-word;
`;

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  letter-spacing: 1.2px;
`;

export const Home = () => {
  return (
    <Container>
      <Heading>
        Beauty Care
        <br /> Manager
      </Heading>
      <SectionTitle>Statistics</SectionTitle>
    </Container>
  );
};
