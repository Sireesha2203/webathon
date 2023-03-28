import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">EMI</Navbar.Brand>
        <div className='justify-content-end'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Entrepreneurship">Entrepreneurship</Nav.Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Entrepreneur/Login">As Entrepreneur</NavDropdown.Item>
              <NavDropdown.Item href="/Mentor/Login">As Mentor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Investor/Login">As Investor</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Register" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Entrepreneur/Register">As Entrepreneur</NavDropdown.Item>
              <NavDropdown.Item href="/Mentor/Register">As Mentor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Investor/Register">As Investor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navi;