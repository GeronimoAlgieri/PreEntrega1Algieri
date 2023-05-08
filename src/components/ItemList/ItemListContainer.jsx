import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { database } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(database, "producto");

    if (categoryName) {
      const filtrado = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = filtrado;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const productos = res.docs.map((prod) => {
          return {
            ...prod.data(),
            id: prod.id,
          };
        });
        setItems(productos);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
