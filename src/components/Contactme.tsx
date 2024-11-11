import Hero from "./Hero";
import Contact from "./Contact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contactme = () => {
  return (
    <section id="about" className="mt-2">
      <Container>
        <Row>
          <Col>
            <Contact />
          </Col>
          <Col>
            <Hero />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contactme;
