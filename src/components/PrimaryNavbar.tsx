import logo from "@assets/logo.jpg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarItem: React.FC<{
  path: string;
  text: string;
}> = ({ path, text }) => {
  const location = useLocation();

  return (
    <Link
      className={`nav-link nav-item${
        location.pathname === path ? " active" : ""
      }`}
      to={path}
    >
      {text}
    </Link>
  );
};

const PrimaryNavbar: React.FC = () => (
  <Navbar className="bg-white" expand="lg" sticky="top">
    <Container className="navbar-underline align-items-end">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          alt="Journeys Continue Logo"
          width="160"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavbarItem path="/" text="Home" />
          <NavDropdown id="basic-nav-dropdown" title="About Us">
            <Link className="dropdown-item" to="disability">
              Disability
            </Link>
            <Link className="dropdown-item" to="aged-care">
              Aged Care
            </Link>
            <Link className="dropdown-item" to="supporting-carers">
              Supporting Carers
            </Link>
            <Link className="dropdown-item" to="professional-supervision">
              Professional Supervision
            </Link>
            <Link className="dropdown-item" to="who-we-are">
              Who We Are
            </Link>
          </NavDropdown>
          <NavbarItem path="/resources" text="Resources" />
          <NavbarItem path="/contact" text="Contact Us" />
          <NavbarItem path="/fees" text="Fees" />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default PrimaryNavbar;
