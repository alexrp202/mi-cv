import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutme.css"; // Importamos el archivo CSS
import Contact from "./Contact";

const Aboutme = () => {
  const [greeting, setGreeting] = useState<string>("Hola");
  const [animate, setAnimate] = useState<boolean>(false);

  // Añadimos los nuevos saludos en alemán y chino
  const greetings = {
    es: "Hola,",
    en: "Hello,",
    fr: "Bonjour,",
    de: "Hallo,", // Alemán
    zh: "你好,", // Chino
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prevGreeting) => {
        // Cambiar entre los saludos
        if (prevGreeting === greetings.es) return greetings.en;
        if (prevGreeting === greetings.en) return greetings.fr;
        if (prevGreeting === greetings.fr) return greetings.de;
        if (prevGreeting === greetings.de) return greetings.zh;
        return greetings.es; // Volver a español
      });

      // Activamos la animación cuando cambie el saludo
      setAnimate(true);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        // Desactivar la animación después de que termine
        setAnimate(false);
      }, 1000); // Duración de la animación (1 segundo)

      return () => clearTimeout(timeout);
    }
  }, [animate]); // Cada vez que el estado animate cambie

  return (
    <section id="hero" className="py-5 mt-5">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            md={7}
            className="d-flex mt-5  flex-column align-items-center justify-content-center text-center"
          >
            {/* Aplicamos la animación "slideDown" solo a la palabra "Hola" */}
            <h1 className="greeting-text" style={{ marginLeft: "20px" }}>
              <span
                className={`greeting ${animate ? "slideDown" : ""}`} // Solo animamos la palabra "Hola"
              >
                {greeting}
              </span>{" "}
              soy un <br /> Desarrollador{" "}
              <span style={{ color: "green" }}>Software</span>
            </h1>
            <p style={{ fontSize: "1.5rem", color: "gray" }}>
              Me apasiona crear soluciones digitales y trabajar con tecnologías
              innovadoras.
            </p>
            <p>
              <Contact />
            </p>
          </Col>

          <Col
            xs={12}
            md={5}
            className=" d-flex mb-5 justify-content-center align-items-center"
          >
            <img
              src="coding.gif"
              alt="Coding GIF"
              style={{ width: "500px", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Aboutme;
