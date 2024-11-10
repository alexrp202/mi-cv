import { Container, ListGroup } from "react-bootstrap";

const Experience = () => {
  const jobs = [
    {
      title: "Desarrollador",
      company: "Universidad de Lleida",
      year: "2024",
      Experience:
        "Desarrollo y mantenimiento de aplicaciones web con HTML, CSS y JavaScript, incluyendo mejoras en páginas del campus online de la Universidad de Lleida. Automatización de tareas en procesos administrativos de la universidad mediante scripts en Python y modelado de flujos de trabajo en Tangram BPM.",
    },

    {
      title: "Prácticas de desarrollo Data Analyst",
      company: "Group Saltó",
      year: "2021",
      Experience:
        "Creación de informes interactivos con Power BI, SQL y Excel, permitiendo el análisis reactivo de datos clave para la toma de decisiones. Modelado y optimización de procesos internos usando un programa de BPM propio de la empresa.",
    },
    {
      title: "Prácticas HelpDesk ",
      company: "Indra",
      year: "2018",
      Experience:
        "Soporte a usuarios de la Generalitat, resolviendo incidencias relacionadas con procesos administrativos, problemas con equipos y otras dificultades técnicas, a través de correo, teléfono y control remoto.",
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Experiencia</h2>
        <ListGroup variant="flush">
          {jobs.map((job, index) => (
            <ListGroup.Item key={index}>
              <h4>
                {job.title} - {job.company}
              </h4>
              <span>{job.year}</span>
              <br />
              <span>{job.Experience}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
};

export default Experience;
