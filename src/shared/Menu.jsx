import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";

const Menu = ({ userAdmin, setUsuarioAdmin }) => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    setUsuarioAdmin(false);
    sessionStorage.removeItem("userKey");
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="bg-body-verde mb-3">
      <Container>
        <Navbar.Brand href="/" className="text-light fw-bold">
          RecetasRolling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link link-light fw-bold text-start">
              INICIO
            </NavLink>
            {userAdmin ? (
              <>
                <NavLink
                  to="/administrador"
                  className="nav-link link-light fw-bold text-start"
                >
                  ADMINISTRADOR
                </NavLink>
                <Button
                  className="nav-link text-light fw-bold text-start"
                  onClick={cerrarSesion}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    textAlign: "left !important",
                    justifyContent: "flex-start",
                    display: "flex"
                  }}
                >
                  CERRAR SESION
                </Button>
              </>
            ) : (
              <NavLink to="/login" className="nav-link link-light fw-bold text-start">
                INICIAR SESION
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
