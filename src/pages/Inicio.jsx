import CardProducto from "./productos/CardProducto";
import { Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        src="https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"
        alt=""
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <Container>
        <div className="text-center">
          <h1 className="mb-3">Bienvenido a mi blog de recetas 🍽️</h1>
          <p>Explorá platos deliciosos, fáciles y rápidos para cada día.</p>
          <hr></hr>
          <h2 className="text-center">Pollo y Carne</h2>
        </div>
        <CardProducto />
      </Container>
    </section>
  );
};

export default Inicio;
