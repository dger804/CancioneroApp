import logo from '../logo.svg';
import {Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Image,     
    Dropdown,
    DropdownButton
  } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export function Navigation() {
  const history = useHistory(); 
  const token = sessionStorage.getItem('token');

  const handlelogout = () =>{
    history.push('/')
    sessionStorage.clear();
  }

  return(
    <Navbar collapseOnSelect fixed="top" expand='lg' bg="dark" variant="dark">
      <Navbar.Brand href="/Home"> 
        <Image src={logo} height='30' alt="App Logo" />
        Cancionero App
      </Navbar.Brand>
      <Nav className="mr-auto">
        { token ? (          
          <DropdownButton title='Menú' menuAlign='left' >
            <Dropdown.Item eventKey='1'>
              Repertorios
            </Dropdown.Item>    
            <Dropdown.Item 
              eventKey='2'
              onClick={handlelogout}
            >
              Cerrar Sesión
            </Dropdown.Item>       
          </DropdownButton>
          ) : (
            <>
              <Nav.Link href="/Login">Ingresar</Nav.Link>
              <Nav.Link href="/Register">Registro</Nav.Link> 
            </>     
                
          )          
        }
        

      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-primary">Buscar</Button>
      </Form>
    </Navbar>
  )
}