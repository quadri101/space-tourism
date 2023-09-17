import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseTemplate from "../pages/Template/BaseTemplate";
import Destination from "../pages/Destination/Destination";
import Crew from "../pages/Crew/Crew";
import Technology from "../pages/Technology/Technology";
import Home from "../pages/Home/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

export default router;
