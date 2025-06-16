import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  padding-bottom: 45px;
  max-height: 700px;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    overflow-y: unset;
    max-height: none;
    align-items: stretch;ś
  }
`;
