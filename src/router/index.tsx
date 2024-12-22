import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageWrapper from "../layouts/PageWrapper";
import Shop from "../pages/shop/Shop";
import BookPage from "../pages/shop/BookPage";

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
    ],
  },
]);
export default router;
