import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
import Cart from "./components/cart/Cart";

const queryClient = new QueryClient();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
        <Header onCartClick={() => setCartIsShown(true)} />
        <main>
          <ProductsPage />
        </main>
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
