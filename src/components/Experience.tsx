import { Container, ListGroup } from "react-bootstrap";

const Experience = () => {
  const jobs = [
    {
      title: "Desarrollador",
      company: "Universidad de Lleida",
      year: "2021",
    },

    {
      title: "Prácticas de desarrollo Data Analyst",
      company: "Group Saltó",
      year: "2021",
    },
    {
      title: "Prácticas HelpDesk ",
      company: "Indra",
      year: "2018",
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
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
};

export default Experience;
