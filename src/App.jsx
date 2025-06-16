import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StylistsPanel } from "./components/stylists/StylistsPanel";
import { ClientsPanel } from "./components/clients/ClientsPanel";
import { TreatmentTypesPanel } from "./components/treatmentTypes/TreatmentTypesPanel";
import { TreatmentsPanel } from "./components/treatments/TreatmentsPanel";
import { Navigation } from "./Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled";
import { GlobalStyle } from "../GlobalStyle";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stylists",
        element: <StylistsPanel />,
      },
      {
        path: "/clients",
        element: <ClientsPanel />,
      },
      {
        path: "/treatmentTypes",
        element: <TreatmentTypesPanel />,
      },
      {
        path: "/treatments",
        element: <TreatmentsPanel />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
