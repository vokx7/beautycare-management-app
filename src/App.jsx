import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { StylistsPanel } from "./components/StylistsPanel";
import { Main } from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StylistsPanel } from "./components/stylists/StylistsPanel";
import { ClientsPanel } from "./components/clients/ClientsPanel";
import { TreatmentTypesPanel } from "./components/treatmentTypes/TreatmentTypesPanel";
import { TreatmentsPanel } from "./components/treatments/TreatmentsPanel";
import { Navigation } from "./Navigation";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Main />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </QueryClientProvider>
  );
};
