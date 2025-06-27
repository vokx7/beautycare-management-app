import styled from "styled-components";

export const StyledButtonDelete = styled.button`
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  padding: 6px 0;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  width: ${({ width }) => width || "80px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
