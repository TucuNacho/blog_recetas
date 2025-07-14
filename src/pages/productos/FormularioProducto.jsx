import { Form, Button } from "react-bootstrap";

const FormularioProducto = () => {

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form className="my-4" >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Milanesa rellena de pure"  />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 8500"
             />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"

          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select >
            <option value="">Seleccione una opcion</option>
            <option value="carne y pollo">Carne y pollo</option>
            <option value="bebidas">Bebidas</option>
            <option value="postre">Postres</option>
            <option value="ensaladas">Ensaladas</option>
          </Form.Select>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Crujiente milanesa de carne rellena con jamón y queso, servida con un cremoso puré de papas casero. Un clásico irresistible.."
            as="textarea"

          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Disfrutá de una exquisita milanesa de carne rellena con jamón y queso derretido, empanada hasta quedar dorada y crujiente por fuera. Acompañada de un puré de papas suave y mantecoso, esta receta combina lo mejor de la comida casera con un toque gourmet. Ideal para compartir en familia o darse un gusto especial."
            as="textarea"
           rows={4}
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
