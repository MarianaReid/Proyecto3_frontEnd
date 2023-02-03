import { Container, Nav, Navbar } from "react-bootstrap";


const AdminNav = () => {

    return (
        <Navbar bg = "dark" variant = "dark" >
            <Container>
                <Navbar.Brand href="#home">Panel Administrador</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/admin/productos" className="m-5">Alta de Productos</Nav.Link>
                    <Nav.Link to="/admin/listaProductos" className="m-5">Lista de Productos</Nav.Link>
                    <Nav.Link to="/admin/usuarios" className="m-5">Usuarios</Nav.Link>
                </Nav>
            </Container>
            </Navbar >
    );
}

export default AdminNav
