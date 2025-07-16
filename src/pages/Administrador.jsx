import { Button, Table } from "react-bootstrap";
import { productosData } from "../data/productoPrueba";
import ItemProducto from "./productos/ItemProducto";
import { Link } from "react-router-dom";
const Administrado = ({productos, setProductos, borrar}) => {
  const cargarProductos = () => {
    setProductos(productosData);
  }
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button
            className="ms-2 btn btn-info text-light"
            onClick={cargarProductos}
          >
            <i className="bg bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, indice) => <ItemProducto key={producto.id} producto={producto} fila={indice+1} borrar={borrar}></ItemProducto>)}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrado;
