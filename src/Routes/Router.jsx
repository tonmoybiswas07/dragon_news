import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots/Roots";
import Auth from "../Components/Auth/Auth";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Components/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/career",
    Component: Career,
  },
]);
export default router;
