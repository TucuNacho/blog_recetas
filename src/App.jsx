import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import FormularioProducto from "./pages/productos/FormularioProducto";
import DetalleProducto from "./pages/DetalleProducto";
import Recetas from "./pages/productos/Recetas";
import Error404 from "./pages/Error404";
import Protector from "./routes/Protector";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
   const usuarioLogueado = sessionStorage.getItem("userKey") || false;
  const  productosLocalStorage= JSON.parse(localStorage.getItem("productos")) || []
  const [productos, setProductos] = useState(productosLocalStorage);
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  useEffect(()=>{
    localStorage.setItem("productos", JSON.stringify(productos))
  }, [productos])
  return (
    <>
      <BrowserRouter>
        <Menu userAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}/>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login setUser={setUsuarioAdmin}/>} />
            <Route path="/administrador" element={<Protector isAdmin={usuarioAdmin}></Protector>}>
            <Route index element={<Administrador productos={productos} setProductos={setProductos}/>} />
            <Route path="crear" element={<FormularioProducto />}></Route>
            <Route path="editar" element={<FormularioProducto/>} ></Route>
            </Route>
            <Route path="/detalle" element={<DetalleProducto />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
