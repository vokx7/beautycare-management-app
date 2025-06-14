import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavElement = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 500;

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: #e2e6ea;
  }
`;
export const AppLink = ({ to, children }) => {
  return <NavElement to={to}>{children}</NavElement>;
};
