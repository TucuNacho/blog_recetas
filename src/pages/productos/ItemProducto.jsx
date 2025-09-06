import { Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto, fila, borrar }) => {
  const eliminarReceta = () => {
    Swal.fire({
      title: "Eliminar receta?",

      text: "No podras revertir esta accion!",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#83ba67",

      cancelButtonColor: "#d33",

      confirmButtonText: "Si, borrar receta!",
      cancelButtonText: "No, salir !",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrar(producto.id)) {
          Swal.fire({
            title: "Producto eliminado",

            text: `El producto ${producto.nombreReceta} fue eliminado correctamente`,

            icon: "success",
          });
      } else {
        Swal.fire({
          title: "Ocurrio un error",

          text: `El producto ${producto.nombreReceta} no pudo ser eliminado.`,

          icon: "error",
        });
      }
    }
    });
  };
  return (
    <tr>
      <td className="text-center">{fila}</td>

      <td>{producto.nombreReceta}</td>

      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-admin"
          alt={producto.nombreReceta}
        ></img>
      </td>

      <td>{producto.categoria}</td>

      <td className="text-center">
        <Row>
          <Col xs={1} md={2}>
            <Link
              variant="warning"
              className="me-lg-2 btn btn-warning mb-2"
              to={`/administrador/editar/${producto.id}`}
            >
              <i className="bi bi-pencil-square"></i>
            </Link>

            <Button variant="danger" onClick={eliminarReceta}>
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </td>
    </tr>
  );
};

export default ItemProducto;
