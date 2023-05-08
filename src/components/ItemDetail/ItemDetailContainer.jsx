import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products, setProduct] = useState({});

  const { agregarAlCarrito, getQuatityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(database, "productos");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...products,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
  };

  let cantidadTotal = getQuatityById(products.id);

  return (
    <div>
      <ItemDetail
        products={products}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
