import { Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const CardProducto = ({receta}) => {
  const navigate = useNavigate();
  return (
      <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src={receta.imagen}
            alt={receta.nombreProducto}
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">{receta.nombreProducto}</Card.Title>
          <Card.Text>
            {receta.descripcion_breve} <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="justify-content-between d-flex">
          <Button variant="warning" className="text-light" onClick={() => navigate("/recetas")}>
            Ver receta
          </Button>
          <Link to={`/detalle/${receta.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </Card.Footer>

      </Card>
    </Col>
  );
};

export default CardProducto;
