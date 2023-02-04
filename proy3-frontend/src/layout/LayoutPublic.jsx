import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Opciones from "../components/Carrusel";
import Footer from "../components/Footer";
import OffCanvas from "../components/Navbar";

const LayoutPublic = () => {
    return (
        <>
            <Container>

                <OffCanvas />

                <Row>
                    <Opciones />
                </Row>

                <Outlet />

                <Footer />

            </Container>
        </>
    );
}

export default LayoutPublic;