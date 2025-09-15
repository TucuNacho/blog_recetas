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
import Registro from "./pages/Registro";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [productos, setProductos] = useState([]);
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);
  return (
    <div className="bg-dark text-light min-vh-100"
    style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}
    >
      <BrowserRouter>
        <Menu userAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <main
        style={{flexGrow: 1}}
        >
          <Routes>
            <Route path="/" element={<Inicio recetas={productos} />} />
            <Route
              path="/login"
              element={<Login setUser={setUsuarioAdmin} />}
            />
            <Route
              path="/registro"
              element={<Registro />}
            />
            <Route
              path="/administrador"
              element={<Protector isAdmin={usuarioAdmin}></Protector>}
            >
              <Route
                index
                element={
                  <Administrador
                    productos={productos}
                    setProductos={setProductos}
                  />
                }
              />
              <Route
                path="crear"
                element={
                  <FormularioProducto
                    titulo={"Creando receta"}
                  />
                }
              ></Route>
              <Route
                path="editar/:id"
                element={
                  <FormularioProducto
                    titulo="Editando Receta"
                  />
                }
              ></Route>
            </Route>
            <Route
              path="/detalle/:id"
              element={<DetalleProducto/>}
            />
            <Route
              path="/recetas/:id"
              element={<Recetas />}
            />
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
