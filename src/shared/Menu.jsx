import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link} from "react-router";
const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-verde mb-3">
      <Container>
        <Navbar.Brand href="/" className="text-light fw-bold">RecetasRolling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavLink to="/" className="nav-link link-light fw-bold">INICIO</NavLink>
            <NavLink to="/login" className="nav-link link-light fw-bold">INICIAR SESION</NavLink>
            <NavLink to="/administrador" className="nav-link link-light fw-bold">ADMINISTRADOR</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
