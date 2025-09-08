import CardProducto from "./productos/CardProducto";
import { Container, Row} from "react-bootstrap";
import { useState, useEffect } from "react";
import { leerReceta } from "../helpers/queries";
const Inicio = () => {
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(() => {
    obtenerReceta();
  },[]);

  const obtenerReceta = async () => {
    console.log("🚀 Iniciando petición...");
    const respuesta = await leerReceta();
    console.log("📡 Respuesta:", respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaRecetas(datos);
    } else {
      console.info("Ocurrio un error al buscar las recetas");
    }
  };
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
        <Row>
          {listaRecetas.map((receta)=> <CardProducto key={receta._id} receta={receta}></CardProducto>)}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
