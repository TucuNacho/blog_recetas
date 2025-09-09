import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { leerRecetaPorId } from "../../helpers/queries";
const Recetas = ({ verReceta }) => {
  const [receta, setReceta] = useState(null);
  const { id } = useParams();
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
  if (!receta) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Cargando Recetas...</h2>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row xs={1} className="my-3 text-center">
        <Col>
          <h1>{receta.nombreReceta}</h1>
        </Col>
      </Row>
      <Row xs={1} className="my-3">
        <Col className="text-center">
          <img
            src={receta.imagen}
            alt={receta.nombreReceta}
            className="img-recetas"
          />
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <h4>Metodo de prepracion de</h4>
        <p>{receta.metodoPreparacion}</p>
      </Row>
      <Row>
        <Col>
          <h2>Ingredientes</h2>
          {receta.ingredientes &&
            receta.ingredientes.map((ingrediente, index) => (
              <li key={index} className="mb-2 ">
                <strong>{ingrediente}</strong>
              </li>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Recetas;
