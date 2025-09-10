import { Button, Table, Row, Col } from "react-bootstrap";
import { productosData } from "../data/productoPrueba";
import ItemProducto from "./productos/ItemProducto";
import { Link } from "react-router-dom";
import { leerReceta } from "../helpers/queries";
import { useEffect, useState } from "react";
const Administrado = ({ setProductos, borrar }) => {
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(()=>{
    obtenerReceta()
  })

  const obtenerReceta = async () => {
    const respuesta = await leerReceta();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaRecetas(datos);
    } else {
      console.info("Ocurrio un error al buscar las recetas");
    }
  };

  const cargarProductos = () => {
    setProductos(productosData);
  };
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Row className="mb-3">
          <Col>
            <div className="d-flex flex-column flex-md-row gap-2">
              <Link className="btn btn-primary" to={"/administrador/crear"}>
                <i className="bi bi-file-earmark-plus"></i>
              </Link>
              <Button
                className="btn btn-info text-light"
                onClick={cargarProductos}
              >
                <i className="bi bi-database-fill-add"></i>{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
<<<<<<< HEAD
            <th>Cod</th>
            <th>Producto</th>
=======
            <th>Filas</th>
            <th>Recetas</th>
>>>>>>> dev
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaRecetas.map((producto, indice) => (
            <ItemProducto
              key={producto._id}
              producto={producto}
              fila={indice + 1}
              borrar={borrar}
              setListaRecetas={setListaRecetas}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrado;
