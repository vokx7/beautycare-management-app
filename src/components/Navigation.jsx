import { Outlet } from "react-router-dom";
import { AppLink } from "./AppLink";

import {
  SlHome,
  SlPeople,
  SlBookOpen,
  SlPuzzle,
  SlMagicWand,
} from "react-icons/sl";

import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 1px #f5f7fa solid;
  position: fixed;

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
            <AppLink to="/stylists" title={"Stylists"} />
            <AppLink to="/clients" title={"Clients"} />
            <AppLink to="." title={"Home"} />
            <AppLink to="/treatmentTypes" title={"Services"} />
            <AppLink to="/treatments" title={"History"} />
          </DesktopOnly>
          <MobileOnly>
            <AppLink
              to="/clients"
              icon={<SlPeople size={22} />}
              title="Clients"
            />
            <AppLink
              to="/stylists"
              icon={<SlMagicWand size={22} />}
              title="Stylists"
            />
            <AppLink to="." icon={<SlHome size={22} />} title="Home" />
            <AppLink
              to="/treatmentTypes"
              icon={<SlPuzzle size={22} />}
              title="Services"
            />
            <AppLink
              to="/treatments"
              icon={<SlBookOpen size={22} />}
              title="History"
            />
          </MobileOnly>
        </Nav>
      </header>
      <Outlet />
    </main>
  );
};
