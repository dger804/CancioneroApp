import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';

export function SongBook(){
  return(
    <div className="main">
      <Container fluid>
      <Row>
        <Col>
          Carpetas
        </Col>
        <Col>
          Canciones
        </Col> 
      </Row> 
      </Container>      
    </div>  
  )
}