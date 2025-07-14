import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Login = ({ setUser }) => {
   const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const iniciarSesion = (usuario) => {
    if (
      usuario.mail === import.meta.env.VITE_API_MAIL &&
      usuario.pass === import.meta.env.VITE_API_PASS
    ) {
      setUser(true);
      sessionStorage.setItem("userKey",true)
      navigate("/administrador");
    } else {
      console.error("Usuario o contraseña incorrectos");
    }
  };
  return (
    <section className="container my-3">
      <h1 className="text-center">Login</h1>
      <Row md={2} sx={1}>
        <Col>
          <Form onSubmit={handleSubmit(iniciarSesion)}>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="juanitoPerez@.com"
              {...register("mail",{
                required: "El email es obligatorio",
                pattern: {
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "El email debe tener un formato valido, por ej: juanitoperez@mail.com"
                }
              })}
              />
               <Form.Text className="text-danger">
                {errors.mail?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" {...register("pass",{
                required: "La contraseña es obligatoria",
                pattern: {
                  value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
                }
              })}/>
               <Form.Text className="text-danger">
                {errors.pass?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Entrar
            </Button>
          </Form>
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
            alt="comida"
            className="w-100 "
          />
        </Col>
      </Row>
    </section>
  );
};

export default Login;
