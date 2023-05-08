import { HiShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div>
        <HiShoppingCart size={25} />
        <span>{cart.length}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
