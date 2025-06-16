import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  font-weight: 500;
`;
const StyledIcon = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavElement = styled(NavLink)`
  width: 100%;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  text-decoration: none;

  &.active ${StyledTitle} {
    color: ${({ theme }) => theme.colors.brand};
  }

  &.active ${StyledIcon} {
    filter: brightness(1.2);
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const AppLink = ({ to, title, icon }) => {
  return (
    <NavElement to={to}>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
    </NavElement>
  );
};
