import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Items from "./components/Items";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Items />
    </QueryClientProvider>
  );
}

export default App;
