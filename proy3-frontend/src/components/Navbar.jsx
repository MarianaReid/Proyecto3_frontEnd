import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { getLocalStorage } from '../utils/LocalStorageHelper';

const OffCanvas = () => {
  
  //Ver lo de consultar el usuario logeado
  const [isLogged, setIsLogged] = useState({});

  useEffect(() => {
    setIsLogged(getLocalStorage("userLogged"));
  }, []);

  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/">Sabores Latinos</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-false"
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!isLogged ? (
                  <>
                    <Nav.Link>
                      <NavLink to="/login">Login</NavLink>
                    </Nav.Link><Nav.Link>
                      <NavLink to="/register">Registrar</NavLink>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link>
                      <div>{isLogged.name}</div>
                    </Nav.Link><Nav.Link>
                      <NavLink to="/">Cerrar sesion</NavLink>
                    </Nav.Link>
                  </>
                )
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffCanvas;