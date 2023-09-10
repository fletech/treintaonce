import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import MainLayout from "./layout/MainLayout";
// import Homepage from "./pages/HomePage";
import { Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { DetailsContextProvider } from "../context/DetailsContextProvider";
import CustomDrawer from "./components/Commons/CustomDrawer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <DetailsContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <MainLayout>
        <Homepage />
      </MainLayout> */}
        <Routes isAuthorized={true} />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
      </QueryClientProvider>
    </DetailsContextProvider>
  );
}

export default App;
