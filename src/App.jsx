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
import { v4 as uuidv4 } from "uuid";
// import IngredientesForm from "./pages/productos/IngredientesForm";

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

  const agregarReceta = (nuevaReceta) => {
    nuevaReceta.id = uuidv4();
    setProductos([...productos, nuevaReceta]);
    return true;
  };
  const borrarReceta = (idReceta) => {
    const recetaFiltrada = productos.filter((receta) => receta.id !== idReceta);
    setProductos(recetaFiltrada);
    return true;
  };
  const prepararReceta = (idReceta) => {
    const recetaEditar = productos.find((receta) => receta.id === idReceta);
    return recetaEditar;
  };
  const editarReceta = (idReceta, recetaActualizada) => {
    const recetaEditada = productos.map((receta) => {
      if (receta.id === idReceta) {
        return {
          ...receta,
          ...recetaActualizada,
        };
      } else {
        return receta;
      }
    });
    setProductos(recetaEditada);
    return true;
  };
  return (
    <div className="bg-dark text-light min-vh-100">
      <BrowserRouter>
        <Menu userAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <main>
          <Routes>
            <Route path="/" element={<Inicio recetas={productos} />} />
            <Route
              path="/login"
              element={<Login setUser={setUsuarioAdmin} />}
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
                    borrar={borrarReceta}
                  />
                }
              />
              <Route
                path="crear"
                element={
                  <FormularioProducto
                    agregarReceta={agregarReceta}
                    titulo={"Creando receta"}
                  />
                }
              ></Route>
              <Route
                path="editar/:id"
                element={
                  <FormularioProducto
                    editarReceta={prepararReceta}
                    titulo="Editando Receta"
                    recetaEditada={editarReceta}
                  />
                }
              ></Route>
            </Route>
            <Route
              path="/detalle/:id"
              element={<DetalleProducto buscarReceta={prepararReceta} />}
            />
            <Route
              path="/recetas/:id"
              element={<Recetas verReceta={prepararReceta} />}
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
