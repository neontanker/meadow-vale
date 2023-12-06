import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../ui/Modal";
import Card from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ onClose }) => {
  const [isOrdered, setOrdered] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: +1 });
  };
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setOrdered(true);
    // Checkout and then post an order...
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className="text-right">
      {hasItems && (
        <button
          className="font-inherit cursor-pointer bg-transparent border border-solid border-green-500 py-2 px-8 rounded-full ml-4"
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl my-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && <p className="text-center mt-4">Ordered! (not really)</p>}
      {!isOrdered && modalActions}
    </React.Fragment>
  );

  return (
    <Modal onClick={onClose}>
      <Card>
        <FontAwesomeIcon
          icon={faX}
          onClick={onClose}
          className="cursor-pointer right-4 top-4 absolute"
        />
        {cartModalContent}
      </Card>
    </Modal>
  );
};

export default Cart;
