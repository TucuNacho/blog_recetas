import { Button, Table } from "react-bootstrap";
const Administrado = () => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Button className="btn btn-primary">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <Button
            className="ms-2 btn btn-info text-light"
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

        </tbody>
      </Table>
    </section>
  );
};

export default Administrado;
