import React from "react";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ products, onAdd, cantidadTotal }) => {
  return (
    <div className="container">
      <div>
        <img width={350} height={350} src={products.img} alt="" />
      </div>
      <div>
        <h2>{products.title}</h2>
        <h2>Description:</h2>
        <p>{products.description}</p>
        <CounterContainer
          stock={products.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
