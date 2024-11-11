import { Card, Container, Row } from "react-bootstrap";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import "./Contact.css"
const Contact = () => {
  return (
    <Container className="mt-5">
    <Row className="justify-content-center">

        <a href="mailto:alexrp202@gmail.com" className="card-link">
          <Card className="text-center shadow-sm p-3 mb-3 bg-white rounded hover-card">
            <Card.Body>
              <BsEnvelopeFill size={40} className="mb-3 text-primary" />
              <Card.Title>Correo Electrónico</Card.Title>
              <Card.Text>alexrp202@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </a>
  
    
 
        <a href="tel:+123456789" className="card-link">
          <Card className="text-center shadow-sm p-3 mb-5 bg-white rounded hover-card">
            <Card.Body>
              <BsTelephoneFill size={40} className="mb-3 text-success" />
              <Card.Title>Teléfono</Card.Title>
              <Card.Text>+1 (234) 567-89</Card.Text>
            </Card.Body>
          </Card>
        </a>
    
    </Row>
  </Container>
  );
};

export default Contact;
