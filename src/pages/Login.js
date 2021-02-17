import '../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { userLogin } from '../store/loginReducer'

export function Login(){
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { login, loading } = useSelector(
    ({ loginReducer: { login, loading } }) =>{
      return { login, loading }
    }
  )

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(token){
      Swal.fire({
        title: 'Ingreso Exitoso!',
        text: 'Bienvenido',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      history.push('/SongBook')
    }
  },[login])

  const [ loginForm, setLoginForm ] = useState({
    email: "",
    userType: "user",
    password: "",
  })

  const handleChange = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async e =>{
    e.preventDefault();
    const { email, password } = loginForm;
    dispatch(userLogin(email, password));
  }

  const { email, password } = loginForm
  return(
    <div className="main">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form className="loginForm" onSubmit={handleLogin}>
              <h1>Ingresar</h1>
              <Form.Group controlid="FormBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escriba email"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlid="formBasicEmail">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="form-control"
                variant="primary"
                type="submit"
                disabled={loading}
                >
                Ingresar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}