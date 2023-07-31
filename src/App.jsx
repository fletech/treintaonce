import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "./layout/index";
import Navbar from "./components/Navbar/NavBar";
import HeroSection from "./components/Hero/Hero";

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
      <Navbar />
      <Layout>
        <HeroSection />
      </Layout>
      <footer className="bg-gray-200 py-8">
        {/* Contenido del pie de página */}
      </footer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
