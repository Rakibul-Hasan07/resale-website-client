import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");

export const routes = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>, children: [{

        }]
    }
])