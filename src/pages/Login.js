import '../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export function Login(){
  return(
    <div className="main">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Ingresar</h1>
            <Form.Group controlid="FormBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Escriba email"
                name="email"

                required
              />
            </Form.Group>
            <Form.Group controlid="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                
                required
              />
            </Form.Group>
            <Button
              className="form-control"
              variant="primary"
              type="submit"
              >
              Ingresar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}