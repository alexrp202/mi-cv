import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="mb-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about">Sobre Mí</Nav.Link>
          <Nav.Link href="#experience">Experiencia</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#portfolio">Portafolio</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
