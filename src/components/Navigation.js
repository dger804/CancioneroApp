import logo from '../logo.svg';
import {Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Image     
  } from 'react-bootstrap'

export function Navigation() {
  return(
    <Navbar fixed="top" expand='lg' bg="dark" variant="dark">
      <Navbar.Brand href="/Home"> 
        <Image src={logo} height='30' alt="App Logo" />
        Cancionero App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Login">Ingresar</Nav.Link>
        <Nav.Link href="/Register">Registro</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-primary">Buscar</Button>
      </Form>
    </Navbar>
  )
}