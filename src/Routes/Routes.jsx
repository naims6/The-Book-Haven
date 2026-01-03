import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Page404 from "../Pages/Error/Page404";
import MyBook from "../Pages/MyBook/MyBook";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/AllBook/AllBook";
import PrivateRoute from "./PrivateRoute";
import BookDetailsPage from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import AboutUs from "../Pages/AboutUs/About";
import SupportPage from "../Pages/Support/SupportPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

export const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-books",
        element: <AllBook></AllBook>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage></BookDetailsPage>,
      },
      {
        path: "/book-update/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-book",
        element: (
          <PrivateRoute>
            <MyBook></MyBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      }
    ]
  },
  // auth layout
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: Page404,
  },
]);
