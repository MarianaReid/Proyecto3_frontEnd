import { Button, Nav, Navbar, NavLink } from "react-bootstrap";


const AdminNav = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand href="#home">Panel Administrador</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/admin/productos'>Alta de Productos</Nav.Link>
                        <Nav.Link as={NavLink} to='/admin/listaproduct'>Lista de Productos</Nav.Link>
                        <Nav.Link as={NavLink} to='/admin/usuarios'>Usuarios</Nav.Link>
                        <Nav.Link as={NavLink} to='/admin/mensajes'>Mensajes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button onClick={handleLogout} ClassName="btn btn-light"><i class="fa-solid fa-person-to-door"></i></Button>
            </Navbar>
        </div>
    );
}

export default AdminNav
