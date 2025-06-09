import { Outlet } from "react-router-dom";
import { AppLink } from "./AppLink";

export const Navigation = () => {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <AppLink to=".">Home</AppLink>
            </li>
            <li>
              <AppLink to="/stylists">Stylists</AppLink>
            </li>
            <li>
              <AppLink to="/clients">Clients</AppLink>
            </li>
            <li>
              <AppLink to="/treatmentTypes">Treatment Types</AppLink>
            </li>
            <li>
              <AppLink to="/treatments">Treatments</AppLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};
