import styled from "styled-components";

export const StyledInfoBox = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12.699999809265137px -9px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1.5px #e9e9e9 solid;
  max-width: 400px;
`;
