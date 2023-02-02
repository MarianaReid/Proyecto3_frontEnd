import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = () => {
  return (
    <>
        <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Sabores Latinos</Navbar.Brand>
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
                  <Nav.Link href="#action1">Login</Nav.Link>
                  <Nav.Link href="#action2">Registrar</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffCanvas;