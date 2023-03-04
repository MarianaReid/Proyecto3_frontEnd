import { useEffect, useState } from 'react';
import { Badge, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";


const OffCanvas = ({ UserData }) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lista, setLista] = useState([]);
  const [cartitem, setCartItem] = useState(0);

  
  useEffect(() => {
    setLista(JSON.parse(localStorage.getItem("carrito")));
    let subTotal = lista?.length;
    setCartItem(subTotal);
  },[lista]);

  const closeSession = () => {
    localStorage.clear();
    handleClose();
  }


  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/">Sabores Latinos</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas show={show} onHide={handleClose}
            // id="offcanvasNavbar-expand-false"
            // aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-false" className='fw-bolder'>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {UserData && (
                <>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <NavLink to="/products/pedidos" onClick={handleClose}>
                        <i className="fas fa-shopping-cart"></i>
                      </NavLink>
                      <Badge variant="secondary" className='mx-1'>{cartitem}</Badge>
                    </Nav.Link>
                  </Nav>
                  <hr />
                </>
              )}
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!UserData ? (
                  <>
                    <Nav.Link>
                      <NavLink to="/login" onClick={handleClose}>Login</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/register" onClick={handleClose}>Registrar</NavLink>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link>
                      <div className='fw-bold'>{UserData.name}</div>
                    </Nav.Link>
                    {UserData.role === "ADMIN" &&
                      <>
                        <NavDropdown
                          title="Panel Administrador"
                          // id={`offcanvasNavbarDropdown-expand-${expand}`}
                          className='mb-2'
                        >
                          <NavDropdown.Item>
                            <NavLink to="/admin/edit/user" onClick={handleClose}>
                              Usuarios
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="/admin/edit/product" onClick={handleClose}>
                              Productos
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="/admin/edit/pedido" onClick={handleClose}>
                              Pedidos
                            </NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </>
                    }
                    <hr />
                    <Nav.Link className='mt-2'>
                      <NavLink to="/" onClick={() => closeSession()}>Cerrar sesión
                      </NavLink>
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