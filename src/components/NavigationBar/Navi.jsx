import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';
import "./NavigationBar.css";

function Navi() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand className="brand" href="/">
        <div className="logo-container">
         <img className="logo" width="70px" height="70px" src="images/logo.jpg" alt="" />
         <span className="brand-text">EMS</span>
        </div>
      </Navbar.Brand>

        <div className='justify-content-end'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className=' nav-link '>Home</NavLink>            
            <NavLink to="/Entrepreneurship" className='nav-link'>Entrepreneurship</NavLink>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Entrepreneur/Login" className='nav-link text-secondary'>As Entrepreneur</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/Mentor/Login" className='nav-link text-secondary'>As Mentor</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/Investor/Login" className='nav-link text-secondary'>As Investor</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Register" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Entrepreneur/Register" className='nav-link text-secondary'>As Entrepreneur</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Mentor/Register" className='nav-link text-secondary'>As Mentor</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/Investor/Register" className='nav-link text-secondary'>As Investor</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navi;