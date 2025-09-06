import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";

const DetalleProducto = ({ buscarReceta }) => {
  const { id } = useParams();
  const [receta, setReceta] = useState([]);
  useEffect(() => {
    const recetaEncontrada= buscarReceta(id)
    setReceta(recetaEncontrada);
  }, []);
  return (
    <Container className="my-3">
      <Row xs={1} md={2}>
        <Col>
          <img
            src={receta.imagen}
            alt={receta.nombreProducto}
            className="img-fluid rounded"
          />
        </Col>
        <Col>
          <h1>{receta.nombreProducto}</h1>
          <p>
           {receta.descripcion_amplia}
          </p>
          <strong>Categoría: </strong>{receta.categoria}
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
