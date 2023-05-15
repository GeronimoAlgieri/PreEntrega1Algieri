import React from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, limpiarCarrito, eliminarProducto, precioTotal } =
    useContext(CartContext);

  let total = precioTotal();
  const navigate = useNavigate();

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        cart={cart}
        limpiarCarrito={limpiarCarrito}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
};

export default CartContainer;
