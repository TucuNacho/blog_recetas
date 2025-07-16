import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "Producto eliminado!",

          text: `El producto ${producto.nombreProducto} ha sido eliminado.`,

          icon: "success",
        });
      }
      if (borrar(producto.id)) {
        Swal.fire({
          title: "Producto eliminado",

          text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,

          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Ocurrio un error",

          text: `El producto ${producto.nombreProducto} no pudo ser eliminado.`,

          icon: "error",
        });
      }
    });
  };
  return (
    <tr>
      <td className="text-center">{fila}</td>

      <td>{producto.nombreProducto}</td>

      <td className="text-end">${producto.precio}</td>

      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>

      <td>{producto.categoria}</td>

      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
