import { Card, Container, Row } from "react-bootstrap";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="py-5 ">
      <Container className="">
        <Row className="justify-content-center">
          <a href="mailto:alexrp202@gmail.com">
            <Card className="text-center shadow-sm p-3 mb-2 bg-white rounded">
              <Card.Body>
                <BsEnvelopeFill size={40} className="mb-3 text-primary" />
                <Card.Title>alexrp202@gmail.com</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Row>
        <Row>
          <a href="tel:+34601156642">
            <Card className="text-center shadow-sm p-3 mb-2 bg-white rounded">
              <Card.Body>
                <BsTelephoneFill size={40} className="mb-3 text-success" />
                <Card.Title>601156642</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
