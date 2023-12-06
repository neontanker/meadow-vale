import { useState } from "react";
import Products from "../components/products/Products";
import ProductControls from "../components/products/controls/ProductControls";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  // const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mx-auto text-center py-4 font-bold text-2xl">
          Products
        </h2>
        <ProductControls
          selectedCategory={selectedCategory}
          setSelectedCategory={(category) => setSelectedCategory(category)}
          sortBy={sortBy}
          setSortBy={(attribute) => setSortBy(attribute)}
          sortDirection={sortDirection}
          setSortDirection={() =>
            setSortDirection((prevState) =>
              prevState === "asc" ? "desc" : "asc"
            )
          }
        />
        <Products
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
