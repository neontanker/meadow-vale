import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ProductItem = ({ product, onClick }) => {
  const onClickHandler = () => {
    onClick(product.id);
  };
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      amount: amount,
      price: product.price,
    });
  };

  return (
    <li className="flex flex-col">
      <button
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 h-96"
        onClick={onClickHandler}
      >
        <img
          src={product.image}
          alt="Hand holding black machined steel mechanical pencil with brass tip and top."
          className="h-full w-full object-contain object-center group-hover:opacity-75 cursor-pointer "
        />
      </button>

      <h3
        className="mt-4 text-sm text-gray-700 cursor-pointer hover:text-green-500"
        onClick={onClickHandler}
      >
        {product.title}
      </h3>
      <div className="flex justify-between mt-auto">
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.category}
        </p>
        <div>
          <p className="mt-1 text-lg font-medium text-gray-900 text-right">
            £{product.price}
          </p>
          <button
            onClick={() => addToCartHandler(1)}
            className="flex border border-solid border-green-500 rounded-md px-3 py-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
