const ProductItem = ({ product, onClick }) => {
  const onClickHandler = () => {
    onClick(product.id);
  };

  return (
    <li className="flex flex-col">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 h-96">
        <img
          src={product.image}
          onClick={onClickHandler}
          alt="Hand holding black machined steel mechanical pencil with brass tip and top."
          className="h-full w-full object-contain object-center group-hover:opacity-75 cursor-pointer"
        />
      </div>

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
        <p className="mt-1 text-lg font-medium text-gray-900">
          £{product.price}
        </p>
      </div>
    </li>
  );
};

export default ProductItem;
