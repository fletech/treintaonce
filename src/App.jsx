import { QueryClient, QueryClientProvider } from "react-query";

import Works from "./components/Works";
import Categories from "./components/Categories";
import Data from "./components/Data";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Data />
      <Works />
      <Categories />
    </QueryClientProvider>
  );
}

export default App;
