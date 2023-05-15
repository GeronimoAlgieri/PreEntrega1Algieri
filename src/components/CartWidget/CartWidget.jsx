import { HiShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cartwidget">
        <HiShoppingCart size={35} />
        <div className="numerito">
          <span>{cart.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
