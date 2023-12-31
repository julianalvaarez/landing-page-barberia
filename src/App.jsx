import { Carrusel } from "./components/Carrusel";
import { Contacto } from "./components/Contacto";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Servicios } from "./components/Servicios";

function App() {
  return (
    <>
      <header className="p-4 md:p-10">
        <NavBar />
        <Header />
        <Carrusel />
      </header>
      <Servicios />
      <Contacto />
    </>
  );
}

export default App;
