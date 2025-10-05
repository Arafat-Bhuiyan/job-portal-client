import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Auth/Register";
import { SignIn } from "../pages/Auth/SignIn";
import { JobDetails } from "../pages/JobDetails/JobDetails";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { ApplyJob } from "../pages/Applications/ApplyJob";
import { MyApplications } from "../pages/MyApplications/MyApplications";
import { AddJob } from "../pages/AddJob/AddJob";

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
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <ApplyJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
