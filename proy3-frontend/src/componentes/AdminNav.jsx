import { Container, Nav, Navbar, NavLink } from "react-bootstrap";


const AdminNav = () => {

    return (
        <Navbar bg = "dark" variant = "dark" >
            <Container>
                <Navbar.Brand href="#home">Panel Administrador</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/admin/productos" className="m-5">Alta de Productos</NavLink>
                    <NavLink to="/admin/listaProductos" className="m-5">Lista de Productos</NavLink>
                    <NavLink to="/admin/usuarios" className="m-5">Usuarios</NavLink>
                </Nav>
            </Container>
            </Navbar >
    );
}

export default AdminNav
