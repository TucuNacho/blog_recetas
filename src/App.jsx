import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import FormularioProducto from "./pages/productos/FormularioProducto";
import DetalleProducto from "./pages/DetalleProducto";
import Error404 from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/administrador" element={<Administrador />} />
            <Route path="/crear"  element= {<FormularioProducto />}></Route>
            <Route path="/detalle" element={<DetalleProducto />} />
            <Route path="*" element={<Error404></Error404>}></Route>

          </Routes>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
