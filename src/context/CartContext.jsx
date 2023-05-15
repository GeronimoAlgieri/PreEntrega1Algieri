import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  let cartJson = JSON.parse(localStorage.getItem("cart"));

  const [cart, setCart] = useState(cartJson || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (producto) => {
    let existe = enElCarro(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const eliminarProducto = (id) => {
    const prodfilter = cart.filter((elemento) => elemento.id !== id);
    setCart(prodfilter);
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const precioTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const enElCarro = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const getQuatityById = (id) => {
    let prod = cart.find((elemento) => elemento.id === id);
    return prod?.quantity;
  };

  let data = {
    precioTotal,
    cart,
    agregarAlCarrito,
    limpiarCarrito,
    eliminarProducto,
    getQuatityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
