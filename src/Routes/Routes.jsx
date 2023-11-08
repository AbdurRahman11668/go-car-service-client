import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddServices from "../Pages/AddServices/AddServices";
import MyServices from "../Pages/MyServices/MyServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://go-car-service-server.vercel.app"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://go-car-service-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
        loader: () => fetch("https://go-car-service-server.vercel.app/products"),
      },
      {
        path: "/myservices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        )
      },
    ],
  },
]);

export default router;
