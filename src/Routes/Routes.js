import CategoryLayout from "../Layout/CategoryLayout";
import DellLaptop from "../Pages/Category/DellLaptop/DellLaptop";
import HpLaptop from "../Pages/Category/HpLaptop/HpLaptop";
import LenovoLaptop from "../Pages/Category/LenovoLaptop/LenovoLaptop";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");

export const routes = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>, children: [{

        }]
    },
    {
        path: '/category', errorElement: <ErrorPage></ErrorPage>, element: <CategoryLayout></CategoryLayout>, children: [
            {
                path: '/category/products/:id', element: <HpLaptop></HpLaptop>, loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/products/${params.id}`)
                }
            }
        ]
    }
])