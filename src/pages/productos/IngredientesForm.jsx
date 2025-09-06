import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const IngredientesForm = ({ ingredientes, setIngredientes }) => {
  const [ingrediente, setIngrediente] = useState("");

  const agregarIngrediente = () => {
    if (ingrediente.trim() !== "") {
      setIngredientes([...ingredientes, ingrediente.trim()]);
      setIngrediente("");
    }
  };

  const eliminarIngrediente = (index) => {
    setIngredientes(ingredientes.filter((_, i) => i !== index));
  };

  return (
    <Form.Group className="mb-3" controlId="FormIngredientes">
      <Form.Label>Ingredientes*</Form.Label>
      <div className="d-flex">
        <Form.Control
          type="text"
          placeholder="Ej: 2 huevos..."
          value={ingrediente}
          onChange={(e) => setIngrediente(e.target.value)}
        />
        <Button variant="primary" className="ms-2" onClick={agregarIngrediente}>
          Agregar
        </Button>
      </div>

      <ul className="mt-2">
        {ingredientes.map((ing, index) => (
          <li key={index}>
            {ing}{" "}
            <Button
              variant="danger"
              size="sm"
              className="m-1"
              onClick={() => eliminarIngrediente(index)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </Form.Group>
  );
};

export default IngredientesForm;
