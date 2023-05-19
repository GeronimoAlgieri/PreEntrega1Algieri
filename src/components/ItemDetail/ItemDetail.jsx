import React from "react";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ products, onAdd, cantidadTotal }) => {
  return (
    <div className="contenedor-producto">
      <div>
        <img width={350} height={350} src={products.img} alt="" />
      </div>
      <div>
        <div>
          <h2>
            Nombre:
            <p>{products.title}</p>
          </h2>

          <h2>Description:</h2>
          <p style={{ marginBottom: "50px" }}>{products.description}</p>
          <h2>U$S {products.price}</h2>
        </div>
        <div>
          <CounterContainer
            stock={products.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
