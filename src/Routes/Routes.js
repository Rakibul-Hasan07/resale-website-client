import CategoryLayout from "../Layout/CategoryLayout";
import DellLaptop from "../Pages/Category/DellLaptop/DellLaptop";
import HpLaptop from "../Pages/Category/HpLaptop/HpLaptop";
import LenovoLaptop from "../Pages/Category/LenovoLaptop/LenovoLaptop";
import NewCollection from "../Pages/Category/NewCollection/NewCollection";
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
            { path: '/category/hp-collection', element: <HpLaptop></HpLaptop> },
            { path: '/category/lenovo-collection', element: <LenovoLaptop></LenovoLaptop> },
            { path: '/category/dell-collection', element: <DellLaptop></DellLaptop> },
            { path: '/category/new-collection', element: <NewCollection></NewCollection> }
        ]
    }
])