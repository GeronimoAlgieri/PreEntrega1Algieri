import React from "react";

const ItemDetail = ({ products }) => {
  return (
    <div>
      <img width={350} height={350} src={products.img} alt="" />
      <h2>{products.title}</h2>
      <h2>{products.description}</h2>
    </div>
  );
};

export default ItemDetail;
