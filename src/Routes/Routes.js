import CategoryLayout from "../Layout/CategoryLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../MyOrders/MyOrders";
import AllProducts from '../Pages/Category/AllProducts/AllProducts'
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
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
            { path: '/blogs', element: <Blogs></Blogs> }
        ]
    },
    {
        path: '/category', errorElement: <ErrorPage></ErrorPage>, element: <PrivateRoutes><CategoryLayout></CategoryLayout></PrivateRoutes>, children: [
            {
                path: '/category/products/:id', element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>, loader: ({ params }) => {
                    return fetch(`https://resale-website-server.vercel.app/category/products/${params.id}`)
                }
            },
            {
                path: '/category/my-orders', element: <MyOrders></MyOrders>
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
            {
                path: '/dashboard', element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/users/all-users', element: <AllSellers></AllSellers>
            },

        ]
    }
])