import { Row, Col, Form, Button } from "react-bootstrap";
const Login = () => {
  return (
    <section className="container my-3">
        <h1 className="text-center">Login</h1>
      <Row md={2} sx={1}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="juanitoPerez@.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="password"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="success" type="submit">Entrar</Button>
          </Form>
        </Col>
        <Col>
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="comida" className="w-100 "/>
        </Col>
      </Row>
    </section>
  );
};

export default Login;
