import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

let bienvenida = "Bienvenido a la pagina";
let nombreDeMarca = "SweetSport";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        bienvenida={bienvenida}
        nombreDeMarca={nombreDeMarca}
      />
    </div>
  );
}

export default App;
