import { createBrowserRouter } from "react-router-dom";
import LayoutProducts from "../layout/LayoutProducts";
import LayoutPublic from "../layout/LayoutPublic";
import Category, { loaderCategory } from "../pages/Category";
import Error from "../pages/Error";
import Home, { loaderCategories } from "../pages/Home";
import Login from "../pages/Login";
import ProductMenu, { loaderProduct } from "../pages/ProductMenu";
import Products, { loaderProducts } from "../pages/Products";
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
                        element: <Products />,
                        loader: loaderProducts,
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
                ]
            },
            {
                path: "/error",
                element: <Error />,
            },
        ],
    },
]);