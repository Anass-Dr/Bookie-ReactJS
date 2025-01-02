import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageWrapper from "../layouts/PageWrapper";
import Shop from "../pages/shop/Shop";
import BookPage from "../pages/shop/BookPage";
import Dashboard from "../pages/dashboard/Dashboard";
import AccountInfo from "../pages/dashboard/AccountInfo";
import BookLoans from "../pages/dashboard/books/BookLoans";
import BookCreate from "../pages/dashboard/books/BookCreate";
import BookList from "../pages/dashboard/books/BookList";
import BookUpdate from "../pages/dashboard/books/BookUpdate";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <BookPage />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "account-info",
            element: <AccountInfo />,
          },
          {
            path: "book-loans",
            element: <BookLoans />,
          },
          {
            path: "book-create",
            element: <BookCreate />,
          },
          {
            path: "book-list",
            element: <BookList />,
          },
          {
            path: "book-update/:id",
            element: <BookUpdate />,
          },
        ],
      },
    ],
  },
]);
export default router;
