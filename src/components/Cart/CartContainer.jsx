import React from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, eliminarProducto, precioTotal } =
    useContext(CartContext);

  let total = precioTotal();
  const navigate = useNavigate();

  const limpiarCarritoAlert = () => {
    Swal.fire({
      title: "Seguro que quieres eliminar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se eliminar los productos del carrito", "", "success");
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        cart={cart}
        limpiarCarritoAlert={limpiarCarritoAlert}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
};

export default CartContainer;
