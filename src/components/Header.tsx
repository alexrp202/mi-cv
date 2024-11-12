import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Aboutme.css";
const Header = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="mb-4 ">
      <Navbar.Brand className="ms-3">
        <Link
          smooth={true}
          duration={700}
          style={{ color: "green" }}
          to="about"
          smooth={true}
          duration={700}
          className="nav-left-text nav-text"
        >
          Alex Rodriguez{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ userSelect: "none" }} className="nav-text mx-auto">
          <Link to="info" smooth={true} duration={700} className="nav-link">
            Sobre Mí
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={700}
            className="nav-link"
          >
            Experiencia
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={700}
            className="nav-link"
          >
            Portafolio
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
