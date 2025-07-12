import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-verde mb-3">
      <Container>
        <Navbar.Brand href="/" className="text-light fw-bold">RecetasRolling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="text-light fw-bold">INICIO</Nav.Link>
            <Nav.Link href="#link" className="text-light fw-bold">INICIAR SESION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
