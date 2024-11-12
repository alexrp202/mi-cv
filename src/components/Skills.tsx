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
    "Git",
    "Bootstrap",
  ];

  return (
    <section id="skills" className="pt-0">
      <Container>
        <div className="d-flex justify-content-center flex-wrap">
          {skills.map((skill, index) => (
            <Badge key={index} pill bg="success" className="m-2">
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
