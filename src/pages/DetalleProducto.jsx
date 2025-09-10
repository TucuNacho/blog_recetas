import { useEffect, useState } from "react";
import { Row, Col, Container , Button} from "react-bootstrap";
import { useParams } from "react-router";
import { leerRecetaPorId } from "../helpers/queries";
import { useNavigate } from "react-router";

const DetalleProducto = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});
  useEffect(() => {
    obtenerReceta();
  }, []);
  const navigate = useNavigate();

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
          <p>
            <em>Receta recomendada para compartir en familia 🍴</em>
          </p>
          <Button
            variant="primary"
            onClick={() => navigate(`/recetas/${receta._id}`)}
          >
            Ver receta completa
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
