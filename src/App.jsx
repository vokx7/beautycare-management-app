import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { StylistsPanel } from "./components/StylistsPanel";
import { Main } from "./components/Main";

 const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
   <Main/>
    </QueryClientProvider>
  );
};
