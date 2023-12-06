import { useQuery } from "react-query";
import ProductItem from "./ProductItem";
import fetchProducts from "./api/fetchProducts";
import { useState } from "react";
import ProductItemExtended from "./ProductItemExtended";
import Loading from "../ui/Loading";

const Products = ({ selectedCategory, sortBy, sortDirection }) => {
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [showExtendedProduct, setShowExtendedProduct] = useState(false);

  const showExtendedProductHandler = (id) => {
    setSelectedProductId(id);
    setShowExtendedProduct(true);
  };

  const hideExtendedProductHandler = () => {
    setShowExtendedProduct(false);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchProducts({ signal, options: "" }),
  });

  if (error) {
    return <div className="text-center text-red-500">Request Failed</div>;
  }
  if (isLoading) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  const filteredProducts = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  const sortedProducts = sortBy
    ? [...filteredProducts].sort((a, b) => {
        if (sortBy === "price") {
          return sortDirection === "asc"
            ? a.price - b.price
            : b.price - a.price;
        }
        if (sortBy === "rating") {
          return sortDirection === "asc"
            ? a.rating.rate - b.rating.rate
            : b.rating.rate - a.rating.rate;
        }
        if (sortBy === "title") {
          return sortDirection === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0;
      })
    : filteredProducts;

  const productList = sortedProducts.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      onClick={showExtendedProductHandler}
    />
  ));

  return (
    <>
      {/* @TODO: Look at cart implementation */}

      {productList.length > 0 ? (
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productList}
        </ul>
      ) : (
        <p className="text-center">No products found.</p>
      )}
      {showExtendedProduct && (
        <ProductItemExtended
          id={selectedProductId}
          onClick={hideExtendedProductHandler}
        />
      )}
    </>
  );
};

export default Products;
