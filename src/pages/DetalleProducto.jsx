import { Row, Col, Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-3">
      <Row xs={1} md={2}>
        <Col>
          <img
            src="https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"
            alt="Detalle del producto"
            className="img-fluid rounded"
          />
        </Col>
        <Col>
          <h1>Milanesa rellena con pure</h1>
          <p>
            Una deliciosa milanesa de carne tierna, cuidadosamente rellena con
            jamón cocido y queso derretido que se funde en cada bocado. Empanada
            con pan rallado crujiente y dorada a la perfección, esta milanesa es
            el equilibrio justo entre textura y sabor. Acompañada por un suave y
            cremoso puré de papas casero, hecho con manteca y un toque de leche,
            es un plato reconfortante que evoca lo mejor de la cocina familiar.
            Perfecto para un almuerzo abundante o una cena que deje satisfecho
            el corazón y el estómago.
          </p>
          <p>
            <strong>Precio: </strong>$8500
          </p>
          <strong>Categoría: </strong>Carne y Pollo
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
