import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContained } from "./components/FormCheckout/FormCheckoutContained";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContained />} />
            <Route path="*" element={<h1>Esta ruta no existe</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
