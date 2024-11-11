import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="mb-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ userSelect: "none" }} className="mx-auto">
          <Link to="about" smooth={true} duration={700} className="nav-link">Sobre Mí</Link>
          <Link to="experience" smooth={true} duration={700} className="nav-link">Experiencia</Link>
          <Link to="skills" smooth={true} duration={700} className="nav-link">Habilidades</Link>
          <Link to="portfolio" smooth={true} duration={700} className="nav-link">Portafolio</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
