import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="text-center  py-5 mt-4">
      <Container>
        <img
          src="./src/assets/foto.jpg"
          alt="Mi Foto"
          className="rounded-circle mb-3"
          width="150"
        />
        <h2>¡Hola! Soy Alex</h2>
        <p className="lead">Desarrollador de softwareM</p>
        <Button variant="primary" href="./src/assets/Curriculum.pdf">
          Descargar CV
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
