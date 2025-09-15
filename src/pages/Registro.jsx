import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queries";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Registro = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    const respuesta = await crearUsuario(usuario);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Usuario creado!",
        text: `Usuario ${usuario.Username} creado correctamente!`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Error al crear usuario",
        icon: "error",
      });
    }
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center">
              <h3 className="mb-0">Crear Cuenta</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    {...register("Username", {
                      required: "El nombre de usuario es requerido",
                      minLength: {
                        value: 3,
                        message: "Mínimo 3 caracteres",
                      },
                    })}
                    isInvalid={!!errors.Username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Username?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@email.com"
                    {...register("mail", {
                      required: "El email es requerido",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                        message:
                          "El email debe tener un formato valido, por ej: juanitoperez@mail.com",
                      },
                    })}
                    isInvalid={!!errors.mail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mail?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    {...register("password", {
                      required: "La contraseña es requerida",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                      },
                    })}
                    isInvalid={!!errors.password}

                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Registrarse
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <p className="mb-0">
                    ¿Ya tienes cuenta?{" "}
                    <Button
                      variant="link"
                      className="p-0 text-decoration-none"
                      onClick={() => navegacion("/login")}
                    >
                      Iniciar Sesión
                    </Button>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
