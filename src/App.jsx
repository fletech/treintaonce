import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import MainLayout from "./layout/MainLayout";
// import Homepage from "./pages/HomePage";
import { Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { DetailsContextProvider } from "../context/DetailsContextProvider";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
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
