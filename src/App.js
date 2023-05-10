import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="mx-3 lg:px-20 dark:bg-black dark:text-white">
      <RouterProvider router={routes}></RouterProvider>
      <MessengerCustomerChat
        pageId="1448235188575536"
        appId="966764354481538"
      />
      ,
    </div>
  );
}

export default App;
