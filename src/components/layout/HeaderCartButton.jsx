import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${"flex border-none cursor-pointer content-around items-center font-bold rounded-3xl px-3 py-1 text-white bg-black max-h-12"} ${
    btnIsHighlighted && "animate-ping"
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className="w-5 h-5 mr-2">
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Cart</span>
      <span className="font-bold ml-4 rounded-3xl px-3 py-1 bg-green-500">
        {numberOfCartItems}
      </span>
    </button>
  );
};
export default HeaderCartButton;
