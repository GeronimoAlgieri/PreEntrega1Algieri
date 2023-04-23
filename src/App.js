import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>Esta ruta no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   <Navbar />
//   <ItemListContainer
//     bienvenida={bienvenida}
//     nombreDeMarca={nombreDeMarca}
//   />
// </div>
