const CartItem = ({ price, title, amount, onRemove, onAdd }) => {
  const fixedPrice = `£${price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-green-500 p-4 m-4">
      <div>
        <h2>{title}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold">{fixedPrice}</span>
          <span className="font-bold border-b-1 border-solid  border-gray-300 py-1 px-3 rounded-md text-gray-900">
            x {amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <button
          onClick={onRemove}
          className="text-red-500 text-center ml-4 m-1 w-8 border-solid border border-red-500"
        >
          −
        </button>
        <button
          onClick={onAdd}
          className="text-green-500 text-center ml-4 m-1 w-8 border-solid border border-green-500"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
