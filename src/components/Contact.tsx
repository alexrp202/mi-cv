import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { BsEnvelopeFill, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  // Usamos useEffect para crear el número de teléfono dinámicamente

  return (
    <Container>
      <Row>
        <Col className="mb-5">
          <a href="mailto:alexrp202@gmail.com" className="card-link">
            <Card className="text-center shadow-sm p-3 bg-white rounded hover-card">
              <Card.Body>
                <BsEnvelopeFill
                  size={40}
                  style={{ color: "green" }}
                  className="mb-3"
                />

                <Card.Title>Correo Electrónico</Card.Title>
                <Card.Text>alexrp202@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="" className="card-link">
            <Card className="text-center shadow-sm p-3 mb-5 bg-white rounded hover-card">
              <Card.Body>
                <BsLinkedin size={40} className="icon-green mb-3" />
                <Card.Title>Linkedin</Card.Title>
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
