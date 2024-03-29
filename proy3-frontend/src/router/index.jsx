import { createBrowserRouter } from "react-router-dom";
import LayoutProducts from "../layout/LayoutProducts";
import LayoutProtected from "../layout/LayoutProtected";
import LayoutPublic from "../layout/LayoutPublic";
import AdminOrder from "../pages/AdminOrder";
import AdminProduct from "../pages/AdminProduct";
import AdminUser from "../pages/AdminUser";
import Building from "../pages/Building";
import CartDetail, { loaderCart } from "../pages/CartDetail";
import Category, { loaderCategory } from "../pages/Category";
import Error from "../pages/Error";
import Home, { loaderCategories } from "../pages/Home";
import LandingPageProducts from "../pages/LandingPageProducts";
import Login from "../pages/Login";
import Pedidos from "../pages/Pedidos/Pedidos";
import ProductEdit from "../pages/ProductEdit";
import ProductMenu, { loaderProduct } from "../pages/ProductMenu";
import Registro from "../pages/Registro";
import UserEdit from "../pages/UserEdit";
import Welcom, { loaderWelcom } from "../pages/Welcom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: loaderCategories,
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
                element: <LayoutProducts />,
                errorElement: <Error />,
                children: [
                    {
                        path: "/products",
                        element: <LandingPageProducts />,
                    },
                    {
                        path: "/products/:id",
                        element: <ProductMenu />,
                        loader: loaderProduct,
                    },
                    {
                        path: "/products/category/:id",
                        element: <Category />,
                        loader: loaderCategory,
                    },
                    {
                        path: "/products/pedidos",
                        element: <Pedidos />,
                    },
                ]
            },
            {
                element: <LayoutProtected />,
                errorElement: <Error />,
                children: [
                    {
                        path: "/admin/edit/product",
                        element: <AdminProduct />,
                    },
                    {
                        path: "/admin/edit/product/:id",
                        element: <ProductEdit />,
                    },
                    {
                        path: "/admin/edit/user",
                        element: <AdminUser />,
                    },
                    {
                        path: "/admin/edit/user/:id",
                        element: <UserEdit />,
                    },
                    {
                        path: "/admin/edit/pedido",
                        element: <AdminOrder />,
                    },
                    {
                        path: "/cart/:id",
                        element: <CartDetail />,
                        loader: loaderCart,
                    }
                ]
            },
            {
                path: "/api/user/active-account/:id",
                element: <Welcom />,
                loader: loaderWelcom,
            },
            {
                path: "/error",
                element: <Error />,
            },
            {
                path: "/building",
                element: <Building />,
            },
        ],
    },
]);