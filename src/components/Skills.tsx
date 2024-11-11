import { Container, Badge } from "react-bootstrap";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "PHP",
    "Typescript",
    "SQL",
    "Java",
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Habilidades</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {skills.map((skill, index) => (
            <Badge key={index} pill bg="primary" className="m-2">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
