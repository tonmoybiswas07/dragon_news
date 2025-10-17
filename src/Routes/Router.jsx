import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots/Roots";
import Auth from "../Components/Auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/auth",
        Component: Auth,
      },
    ],
  },
]);
export default router;
