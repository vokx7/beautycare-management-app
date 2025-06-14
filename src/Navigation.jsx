import { Outlet } from "react-router-dom";
import { AppLink } from "./AppLink";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 5px 0;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 10px 0;

  /* Desktop: Top navbar */
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: auto;
    bottom: 0;
  }
`;

const DesktopOnly = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const Navigation = () => {
  return (
    <main>
      <header>
        <Nav>
          <DesktopOnly>
            <AppLink to=".">Home</AppLink>
            <AppLink to="/stylists">Stylists</AppLink>
            <AppLink to="/clients">Clients</AppLink>
            <AppLink to="/treatmentTypes">Treatment Types</AppLink>
            <AppLink to="/treatments">Treatments</AppLink>
          </DesktopOnly>
          <MobileOnly>
            <AppLink to=".">Home</AppLink>
            <AppLink to="/stylists">Stylists</AppLink>
            <AppLink to="/clients">Clients</AppLink>
            <AppLink to="/treatmentTypes">Treatment Types</AppLink>
            <AppLink to="/treatments">Treatments</AppLink>
          </MobileOnly>
        </Nav>
      </header>
      <Outlet />
    </main>
  );
};
