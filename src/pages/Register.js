import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';

export function Register(){
  return(
    <div className="main">
      <Container fluid>        
        <Row className="justify-content-md-center">
          <Col sm="auto">
            <Form className="registerform">
              <h1>Registrarse</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mr-sm-2"
                  type="email"
                  placeholder="Ingrese email"
                  name="email"
                  required
                />                
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit"
                className="form-control"
                >
                Registrarse
              </Button>
            </Form> 
          </Col>
        </Row>
      </Container>
    </div>  
  );
}