import { Container, Accordion, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

import "./Aboutme.css";
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
      title: "Prácticas HelpDesk ",
      company: "Indra",
      year: "2018",
      Experience:
        "Soporte a usuarios de la Generalitat, resolviendo incidencias relacionadas con procesos administrativos, problemas con equipos y otras dificultades técnicas, a través de correo, teléfono y control remoto.",
    },
  ];
  // Estado para manejar la expansión al hacer hover
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveKey(index.toString());
  };

  const handleMouseLeave = () => {
    setActiveKey(null);
  };

  return (
    <section id="experience" className="py-5 bg-light">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            xs={12}
            md={3}
            className=" d-flex mb-5 justify-content-center align-items-center"
          >
            <img
              src="sobremi.gif"
              alt="Sobremi GIF"
              style={{ width: "500px", height: "auto" }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex  flex-column align-items-center justify-content-center text-center"
          >
            <Container>
              <h2 className="greeting-text" style={{ marginLeft: "20px" }}>
                Experiencia
              </h2>
              <Accordion activeKey={activeKey}>
                {jobs.map((job, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Accordion.Header>
                      <h4>
                        {job.title} - {job.company} ({job.year})
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      {job.Experience.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </Col>
          <Col
            xs={12}
            md={3}
            className=" d-flex mb-5 justify-content-center align-items-center"
          >
            <img
              src="sobremi.gif"
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
