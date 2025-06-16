import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${StyledTitle} {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 2px;
        width: 0;
        background: ${({ theme }) => theme.colors.brand};
        transition: width 0.3s ease;
      }
    }

    &:hover ${StyledTitle}::after {
      background: ${({ theme }) => theme.colors.secondary};
      width: 100%;
    }

    &.active ${StyledTitle}::after {
      background: ${({ theme }) => theme.colors.brand};
      width: 100%;
    }
  }

  &.active ${StyledTitle} {
    color: ${({ theme }) => theme.colors.brand};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-weight: 600;
    }
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
