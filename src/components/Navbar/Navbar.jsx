import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const coleccionCategorias = collection(database, "categorias");
    getDocs(coleccionCategorias)
      .then((res) => {
        let categoriasRes = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategorias(categoriasRes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="contenedor">
        <Link to="/" className="image">
          <img
            src="https://res.cloudinary.com/ddzkdyajp/image/upload/c_scale,h_127/v1680386007/Screenshot_2023-04-01_185312_mv4y6w.png"
            alt=""
          />
        </Link>
        <div className="anclor">
          {categorias.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
