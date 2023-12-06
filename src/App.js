import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
