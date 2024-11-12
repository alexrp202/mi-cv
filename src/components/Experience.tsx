import { Container, Accordion, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Aboutme.css"; // Asegúrate de que este archivo de estilos esté correctamente importado

const Experience = () => {
  const jobs = [
    {
      title: "Desarrollador",
      company: "Universidad de Lleida",
      year: "2024",
      Experience:
        "Desarrollo y mantenimiento de aplicaciones web con HTML, CSS y JavaScript, incluyendo mejoras en páginas del campus online de la Universidad de Lleida.\n Automatización de tareas en procesos administrativos de la universidad mediante scripts en Python y modelado de flujos de trabajo en Tangram BPM.",
    },
    {
      title: "Prácticas de desarrollo Data Analyst",
      company: "Group Saltó",
      year: "2021",
      Experience:
        "Creación de informes interactivos con Power BI, SQL y Excel, permitiendo el análisis reactivo de datos clave para la toma de decisiones.\n Modelado y optimización de procesos internos usando un programa de BPM propio de la empresa.",
    },
    {
      title: "Prácticas HelpDesk",
      company: "Indra",
      year: "2018",
      Experience:
        "Soporte a usuarios de la Generalitat, resolviendo incidencias relacionadas con procesos administrativos, problemas con equipos y otras dificultades técnicas, a través de correo, teléfono y control remoto.",
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            md={7}
            className="d-flex flex-column align-items-center justify-content-center text-center"
          >
            <Container>
              <h2 className="greeting-text" style={{ marginLeft: "20px" }}>
                Experiencia
              </h2>
              <Accordion defaultActiveKey="0">
                {" "}
                {/* Esto asegura que el primer ítem esté desplegado por defecto */}
                {jobs.map((job, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <h4>
                        {job.title} - {job.company} ({job.year})
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      {job.Experience.split("\n").map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </Col>
          <Col
            xs={12}
            md={5}
            className="d-flex mb-5 justify-content-center align-items-center"
          >
            <img
              src="Experience.gif"
              alt="Sobremi GIF"
              style={{ width: "500px", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
