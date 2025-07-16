import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioProducto = ({agregarReceta}) => {
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const agregarRecetas=(receta)=>{
    if(agregarReceta(receta)){
        Swal.fire({
        title: "Producto creado!",

        text:  `La ${receta.nombreReceta} fue creada correctamente!`,

        icon: "success",
      });
      //resetear el formulario
      reset();
    }
    }

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(agregarRecetas)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Receta*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Milanesa rellena de pure"
          {...register("nombreReceta",{
            required:"El nombre de la receta es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            maxLength:{
              value: 50,
              message: "El nombre no puede tener más de 50 caracteres",
            }
          })}
          />
           <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://cdn7.kiwilimon.com/galeriahome/2026/1280x400/2026.jpg.webp"
            {...register("imagen",{
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message: "Debe ser una URL válida de imagen (jpg, jpeg, png, webp)",
              }
            })}
          />
           <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
          {...register("categoria", {
            required: "La categoría es obligatoria",
          })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="carne y pollo">Carne y pollo</option>
            <option value="bebidas">Bebidas</option>
            <option value="postre">Postres</option>
            <option value="ensaladas">Ensaladas</option>
            <option value="otros">Otros...</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Crujiente milanesa de carne rellena con jamón y queso, servida con un cremoso puré de papas casero. Un clásico irresistible.."
            as="textarea"
            {...register("descripcion_breve",{
              required: "La descripción breve es obligatoria",
              minLength: {
                value: 5,
                message: "La descripción breve debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "La descripción breve no puede tener más de 100 caracteres",
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Disfrutá de una exquisita milanesa de carne rellena con jamón y queso derretido, empanada hasta quedar dorada y crujiente por fuera. Acompañada de un puré de papas suave y mantecoso, esta receta combina lo mejor de la comida casera con un toque gourmet. Ideal para compartir en familia o darse un gusto especial."
            as="textarea"
           rows={4}
           {...register("descripcion_amplia",{
            required: "La descripción amplia es obligatoria",
            minLength: {
              value: 10,
              message: "La descripción amplia debe tener al menos 10 caracteres",
            },
            maxLength: {
              value: 500,
              message: "La descripción amplia no puede tener más de 500 caracteres",
            }
           })}
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
           <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
