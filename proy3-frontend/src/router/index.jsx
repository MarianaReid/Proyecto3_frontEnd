import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Registro from "../pages/Registro";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registro />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/error",
                element: <Error />,
            },
        ],
    },
]);