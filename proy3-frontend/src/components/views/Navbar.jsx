import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavScroll = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Sabores Latinos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>            
            <Nav.Link href="#action2">Login</Nav.Link>            
            <Nav.Link href="#">
              Registro
            </Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
