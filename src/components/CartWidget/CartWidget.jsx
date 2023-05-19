import { HiShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="cartwidget">
        <HiShoppingCart size={35} />
        <div className="numerito">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
