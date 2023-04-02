import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <div>
      <HiShoppingCart size={25} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
