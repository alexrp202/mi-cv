import { Container, Card, Row, Col } from "react-bootstrap";
import "./Contact.css";
const Portfolio = () => {
  const projects = [
    {
      name: "Web Outlet Demoto",
      description:
        "Desarrollé el sitio web para Demoto, una empresa de venta de accesorios y repuestos para motos en Lleida, utilizando WordPress como plataforma. Me encargué de todo el proceso, desde la personalización del diseño y funcionalidad en WordPress hasta la gestión del alojamiento y la compra del dominio. La web está optimizada para ofrecer una experiencia de usuario intuitiva y un rendimiento eficiente",
      link: "https://www.demoto.net",
    },
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Portafolio</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index} className="mb-4">
              <a className="card-link" href={project.link}>
                <Card className="rounded hover-card">
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      {project.description.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
