import CategoryLayout from "../Layout/CategoryLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import AllProducts from '../Pages/Category/AllProducts/AllProducts'
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import MyProducts from "../Pages/Products/MyProducts/MyProducts";
import Products from "../Pages/Products/Products/Products";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");

export const routes = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/contactus', element: <ContactUs></ContactUs> },
            {
                path: '/details/:id', element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => {
                    return fetch(`https://resale-website-server.vercel.app/api/v1/details/${params.id}`)
                }
            },
        ]
    },
    {
        path: '/category', errorElement: <ErrorPage></ErrorPage>, element: <PrivateRoutes><CategoryLayout></CategoryLayout></PrivateRoutes>, children: [
            {
                path: '/category/products/:id', element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>, loader: ({ params }) => {
                    return fetch(`https://resale-website-server.vercel.app/api/v1/category/products/${params.id}`)
                }
            },

        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
            {
                path: '/dashboard', element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/users/all-seller', element: <AllSellers></AllSellers>
            },
            { path: '/dashboard/users/all-buyer', element: <AllBuyers></AllBuyers> },
            { path: '/dashboard/add-products', element: <Products></Products> },
            { path: '/dashboard/my-products', element: <MyProducts></MyProducts> }

        ]
    }
])