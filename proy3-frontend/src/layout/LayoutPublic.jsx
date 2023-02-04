import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import OffCanvas from "../components/Navbar";

const LayoutPublic = () => {
    return (
        <>
            <Container>

                <OffCanvas />

                <Outlet />

                <Footer />

            </Container>
        </>
    );
}

export default LayoutPublic;