import React from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartContainer = () => {
  const { cart, limpiarCarrito, eliminarProducto, precioTotal } =
    useContext(CartContext);

  let total = precioTotal();

  return (
    <div>
      <Cart
        total={total}
        cart={cart}
        limpiarCarrito={limpiarCarrito}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
};

export default CartContainer;
