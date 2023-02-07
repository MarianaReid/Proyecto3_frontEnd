import { Container, Nav, Navbar } from "react-bootstrap";

const AdminNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Panel Administrador</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/admin/products">Alta de Productos</Nav.Link>
                        <Nav.Link href="/admin/productslist">Lista de Productos</Nav.Link>
                        <Nav.Link href="/admin/users">Usuarios</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdminNavbar