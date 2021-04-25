import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kasir App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#"
              as={Link}
              to="/"
              className={props.location.pathname === "/" && "active"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/success"
              className={props.location.pathname === "/success" && "active"}
            >
              Success
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={props.location.pathname === "/about" && "active"}
            >
              about
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(NavbarComponent);

export default HeaderWithRouter;
