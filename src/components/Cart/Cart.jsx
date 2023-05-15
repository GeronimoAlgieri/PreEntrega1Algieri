import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, limpiarCarrito, eliminarProducto, total, navigate }) => {
  return (
    <div className="container">
      <div className="container-rigth">
        {cart.map((prod) => {
          return (
            <div key={prod.id} className="tarjeta">
              <img src={prod.img} alt="" />
              <h1>{prod?.title}</h1>
              <h4>U$S{prod.price}</h4>
              <h4>{prod.quantity}</h4>
              <Button
                onClick={() => eliminarProducto(prod.id)}
                variant="contained"
              >
                Eliminar
              </Button>
            </div>
          );
        })}
      </div>
      <div className="finalizacion">
        <h1>El precio total es U$S{total}</h1>
        <div className="btns">
          <Button
            className="btn-clean"
            onClick={limpiarCarrito}
            variant="contained"
            eliminarProducto={eliminarProducto}
          >
            Limpiar carrito{" "}
          </Button>
          <Button variant="contained" onClick={() => navigate("/checkout")}>
            Terminar Compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
