import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="mx-3 lg:px-20 dark:bg-black dark:text-white">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
