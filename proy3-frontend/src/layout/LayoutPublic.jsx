import { Container } from "react-bootstrap";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import OffCanvas from "../components/Navbar";

const LayoutPublic = () => {
    const navigation = useNavigation();

    return (
        <>
            <Container>
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
                <OffCanvas />

                <Outlet />

                <Footer />

            </Container>
        </>
    );
}

export default LayoutPublic;