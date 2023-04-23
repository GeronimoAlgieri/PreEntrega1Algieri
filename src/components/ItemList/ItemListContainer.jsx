import { useState, useEffect } from "react";
import { producto } from "../productosMock";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = producto.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : producto);
    });

    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
