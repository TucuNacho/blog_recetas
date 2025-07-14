import { Row, Col, Container } from "react-bootstrap";

const Recetas = () => {
  return (
    <Container>
      <Row sx={1}  className="my-3">
        <Col>
          <img
            src="https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"
            alt="milanesa rellena de pure"
            className="w-100"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Milanesa rellena de pure</h1>
          <p>
            ¿Te encanta la receta casera de milanesas con puré? Entonces estas
            Milanesas Rellenas de Puré de Papa se convertirá en tu platillo
            favorito. y ¿qué mejor que combinar la guarnición en el plato
            fuerte? Disfruta de estas Milanesas Rellenas de Puré de Papa para la
            siguiente comida que vayas a cocinar.
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
              2 litros de agua, para puré
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
