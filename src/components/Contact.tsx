import { Card, Container, Row, Col } from "react-bootstrap";
import { BsEnvelopeFill, BsLinkedin, BsFileEarmarkText } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} className="mb-3">
          <a href="mailto:alexrp202@gmail.com" className="card-link">
            <Card className="text-center shadow-sm bg-white border-0 hover-card">
              <Card.Body>
                <BsEnvelopeFill size={40} className="icon-green mb-3" />
                <Card.Title>Correo</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs={4} className="mb-3">
          <a target="_blank" href="Curriculum.pdf" className="card-link">
            <Card className="text-center shadow-sm bg-white border-0 hover-card ">
              <Card.Body>
                <BsFileEarmarkText size={40} className="icon-green mb-3" />
                <Card.Title>CV</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs={4} className="mb-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alex-rodriguez-1b64b0258/"
            className="card-link"
          >
            <Card className="text-center shadow-sm bg-white border-0 hover-card">
              <Card.Body>
                <BsLinkedin size={40} className="icon-green mb-3" />
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
