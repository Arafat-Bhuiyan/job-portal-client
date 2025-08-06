import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Auth/Register";
import { SignIn } from "../pages/Auth/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
