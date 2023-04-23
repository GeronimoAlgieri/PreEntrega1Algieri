import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { producto } from "../productosMock";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrado = producto.find((prod) => prod.id === +id);
    setProduct(encontrado);
  }, [id]);
  return (
    <div>
      <ItemDetail products={products} />
    </div>
  );
};

export default ItemDetailContainer;
