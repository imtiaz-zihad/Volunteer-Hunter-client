import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddVolunter from "../Components/AddVolunter";
import ErrorPage from "../Components/ErrorPage";
import AllVolunteer from "../Components/AllVolunteer";
import PrivateRouter from "../Routes/PrivateRoute";
import PrivateRoute from "../Routes/PrivateRoute";
import VolunteersDetails from "../Components/VolunteersDetails";
import MyPostedVolunteer from "../Components/MyPostedVolunteer";
import UpdateVolunteer from "../Components/UpdateVolunteer";
import MyRequest from "../Components/MyRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVolunteer",
        element: <AllVolunteer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/addVolunteer",
        element: (
          <PrivateRoute>
            <AddVolunter />
          </PrivateRoute>
        ),
      },
      {
        path: "/allVolunteer/:id",
        element: (
          <PrivateRoute>
            <VolunteersDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-volunteer",
        element: (
          <PrivateRoute>
            <MyPostedVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-volunteer-request',
        element: (
          <PrivateRoute>
            <MyRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
