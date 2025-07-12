import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

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
          </Routes>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
