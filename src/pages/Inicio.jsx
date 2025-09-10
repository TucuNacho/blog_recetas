import CardProducto from "./productos/CardProducto";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { leerReceta } from "../helpers/queries";
const Inicio = ({ recetas }) => {
  const [listaRecetas, setListaRecetas] = useState([]);
  const categorias = [
    "Carne y pollo",
    "Bebidas",
    "Postres",
    "Ensaladas",
    "Otros...",
  ];
  useEffect(() => {
    obtenerReceta();
  }, []);

  const obtenerReceta = async () => {
    const respuesta = await leerReceta();
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
        {categorias.map((categoria) => {
          const categoriaReceta = listaRecetas.filter(
            (receta) => receta.categoria === categoria
          );
          if (categoriaReceta.length === 0) return null
          return (
            <div key={categoria} className="my-4">
              <h2>{categoria}</h2>
              <Row>
                {categoriaReceta.map((receta) => (
                  <CardProducto key={receta._id} receta={receta}></CardProducto>
                ))}
              </Row>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Inicio;
