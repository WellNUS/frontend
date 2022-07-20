import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import logo from "../../../static/icon/navIcons/logo.png";
import LogoutModal from '../../pages/authentication/Logout';
import ProfileModal from '../../pages/profile/Profile';

function NavbarCollapsed() {
  return (
    <>
      {["md"].map((expand : any) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar-container">
          <Container fluid>
            <Navbar.Brand href="#" className='navbar-logo-container'>
                <img src={logo} alt="Logo" className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvas"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink to="/groups" className="navlink">
                        MEET
                    </NavLink>
                    <NavLink to="/join" className="navlink">
                        JOIN
                    </NavLink>
                    <NavLink to="/counsel" className="navlink">
                      COUNSEL
                    </NavLink>
                    <div className='modal-container'>
                        <ProfileModal />
                        <LogoutModal />
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarCollapsed;