import { Container, Row, Col } from "react-bootstrap";
import "./Aboutme.css"; // Importamos el archivo CSS
import Skills from "./Skills";
const info = () => {
  return (
    <section id="info" className="pt-0 ">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            xs={12}
            md={5}
            className=" d-flex mb-5 justify-content-center align-items-center"
          >
            <img
              src="sobremi.gif"
              alt="Sobremi GIF"
              style={{ width: "500px", height: "auto" }}
            />
          </Col>
          <Col
            md={7}
            className="d-flex  flex-column align-items-center justify-content-center text-center"
          >
            {/* Aplicamos la animación "slideDown" solo a la palabra "Hola" */}
            <h2 className="greeting-text" style={{ marginLeft: "20px" }}>
              Sobre mi
            </h2>
            <p style={{ fontSize: "1.4rem", color: "gray" }}>
              Soy un desarrollador entusiasta de la tecnología, siempre en
              búsqueda de nuevas soluciones y formas de optimizar procesos. Me
              apasiona aprender y enfrentar desafíos, lo que me impulsa a
              mejorar constantemente mis habilidades y conocimientos. Disfruto
              trabajar en equipo, compartir ideas y crear soluciones que tengan
              un impacto positivo en los usuarios y proyectos en los que
              participo.
              <br />
              Mi objetivo es seguir creciendo profesionalmente, aprender nuevas
              herramientas y contribuir de manera significativa en proyectos
              innovadores.
              <Skills />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default info;
