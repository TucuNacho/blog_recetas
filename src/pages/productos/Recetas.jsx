import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Recetas = ({verReceta}) => {
  const[receta, setReceta] = useState()
  const {id} = useParams();
  useEffect(() => {
    const recetaEncontrada = verReceta(id)
    setReceta(recetaEncontrada);
  },[])
  return (
    <Container>
      <Row xs={1}  className="my-3">
        <Col>
          <img
            src={receta.imagen}
            alt={receta.nombreProducto}
            className="w-100"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>{receta.nombreProducto}</h1>
          <p>
            {receta.descripcion_amplia}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Ingredientes</h2>
          <ul className="list-unstyled pt-3">
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/40/50x50/40.png.webp"
                alt="agua"
              />
              
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/864/50x50/864.png.webp"
                alt="leche"
              />
              1 taza de leche de vaca, para puré
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/1490/50x50/1490.png.webp"
                alt="sal"
              />
              1 cucharada de sal
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/1143/50x50/1143.png.webp"
                alt="nuez"
              />
              1 cucharada de nuez moscada, para puré
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/774/50x50/774.png.webp"
                alt="huevos
                "
              />
              3 huevos
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/1330/50x50/1330.png.webp"
                alt="pimienta"
              />
              1 cucharada de pimienta
            </li>
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/1187/50x50/1187.png.webp"
                alt=""
              />
              2 tazas de pan molido
            </li>
          </ul>
        </Col>
        <Col sx={12} md={6}>
        <h6 className="">Porcion para 4 personas</h6>
          <ul className="list-unstyled pt-5">
            <li>
              <img
                src="https://cdn7.kiwilimon.com/ingredientes/1199/50x50/1199.png.webp"
                alt=""
              />
              4 papas, cortada en cubos, para puré
            </li>
            <li>
              <img src="https://cdn7.kiwilimon.com/ingredientes/980/50x50/980.png.webp" alt="" />
              2 cucharadas de mantequilla sin sal, para puré
            </li>
            <li>
              <img src="https://cdn7.kiwilimon.com/ingredientes/1333/50x50/1333.png.webp" alt="" />
              1 cucharada de pimienta blanca, para puré
            </li>
            <li>
              <img src="https://cdn7.kiwilimon.com/ingredientes/864/50x50/864.png.webp" alt="" />
              1/2 taza de leche de vaca
            </li>
            <li>
              <img src="https://cdn7.kiwilimon.com/ingredientes/1490/50x50/1490.png.webp" alt="" />
              1 cucharada de sal
            </li>
            <li className="ms-5">
                1/2 kilo de milanesa de res
            </li>
            <li>
              <img src="https://cdn7.kiwilimon.com/ingredientes/1306/50x50/1306.png.webp" alt="" />
              cantidad suficiente de perejil, picado, para servir
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Recetas;
