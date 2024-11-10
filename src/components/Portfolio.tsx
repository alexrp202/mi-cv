import { Container, Card, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      name: "Proyecto 1",
      description: "Descripción del proyecto 1",
      link: "#",
    },
    {
      name: "Proyecto 2",
      description: "Descripción del proyecto 2",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Portafolio</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.link}>Ver proyecto</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
