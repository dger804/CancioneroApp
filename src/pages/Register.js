import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { regUser } from '../store/registerReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

export function Register(){
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, register } = useSelector(
    ( { registerReducer: { loading, register } } ) => {
      return { loading, register }
    }
  )

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) {
      history.push('/')
      return(
        <Alert variant="succes">Bienvenido</Alert>
      )
    }
  }, [register])

  const [regForm, setRegForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Cliente"
  })

  const handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value
    })
  }
  
  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = regForm
    
    if(password === confirmPassword){
      dispatch(regUser(email, password))
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      })      
    }
  }
  const { email, password, confirmPassword } = regForm
  return(
    <div className="main">
      <Container fluid>        
        <Row className="justify-content-md-center">
          <Col sm="auto">
            <Form onSubmit={handleRegister} className="registerform">
              <h1>Registrarse</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mr-sm-2"
                  type="email"
                  placeholder="Ingrese email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                />                
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit"
                className="form-control"
                disabled={loading}
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