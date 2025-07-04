import styled from "styled-components";

export const StyledButtonEdit = styled.button`
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.brand : theme.colors.bacgroundSecondary};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.primary};
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
