import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CardProducto = () => {
  const navigate = useNavigate();
  return (
      <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src="https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"
            alt="cafe"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">Milanesa rellena de pure</Card.Title>
          <Card.Text>
            Crujiente milanesa de carne rellena con jamón y queso, acompañada de
            un suave y cremoso puré de papas casero. Una combinación clásica y
            sabrosa que nunca falla. . <br className="mb-2" />
            <span className="fw-bold">Precio: $8500</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="justify-content-between d-flex">
          <Button variant="warning" className="text-light" >
            Ver receta
          </Button>
          <Button variant="success" className=""onClick={() => navigate("/detalle")}>
            Ver más
          </Button>
        </Card.Footer>

      </Card>
    </Col>
  );
};

export default CardProducto;
