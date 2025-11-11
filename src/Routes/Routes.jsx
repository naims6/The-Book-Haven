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
        element: (
          <PrivateRoute>
            <BookDetailsPage></BookDetailsPage>
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
    ],
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
