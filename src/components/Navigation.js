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
      <Navbar.Brand href="#home"> 
        <Image src={logo} height='30' alt="App Logo" />
        Cancionero App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Ingresar</Nav.Link>
        <Nav.Link href="#pricing">Registro</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-info">Buscar</Button>
      </Form>
    </Navbar>
  )
}