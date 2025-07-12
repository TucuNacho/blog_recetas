import { useNavigate } from "react-router-dom";
import error from "../assets/error.jpg";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '80vh' }}>
      <img
        src={error}
        alt="Error 404"
        style={{ maxWidth: '400px', width: '100%', borderRadius: '8px', marginBottom: '20px' }}
      />
      <h2 className="mb-3">¡Uy! Esta receta no existe 🍽️</h2>
      <p className="mb-4">Volvé al inicio y seguí cocinando con nosotros.</p>
      <button
        className="btn btn-success"
        onClick={() => navigate("/")}
      >
        Volver al inicio
      </button>
    </section>
  );
};

export default Error404;
