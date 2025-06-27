import styled from "styled-components";

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: space-between;
`;
