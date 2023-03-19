import { Container } from "react-bootstrap";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import OffCanvas from "../components/Navbar";
import { getLocalStorage } from "../utils/LocalStorageHelper";
import "./layoutpublic.css"

const LayoutPublic = () => {
    const navigation = useNavigation();
    const UserData = getLocalStorage("userLogged");

    return (
        <>
            <Container className="layout-public-css">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Cargando...</div>
                )}

                <OffCanvas UserData={UserData} />

                <Outlet/>

                <Footer />

            </Container>
        </>
    );
}

export default LayoutPublic;