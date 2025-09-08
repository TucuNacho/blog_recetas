import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { leerRecetaPorId } from "../helpers/queries";

const DetalleProducto = ({ buscarReceta }) => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});
  useEffect(() => {
    obtenerReceta();
  }, []);

  const obtenerReceta = async () => {
    const respuesta = await leerRecetaPorId(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setReceta(datos);
    } else {
      console.info("Ocurrio un error al buscar las recetas");
    }
  };
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
          <h1>{receta.nombreReceta}</h1>
          <p>
            <strong> Descripcion de la receta: </strong>
            {receta.descripcion_amplia}
          </p>
          <strong>Categoría: </strong>
          {receta.categoria}
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
