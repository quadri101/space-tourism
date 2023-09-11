import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
