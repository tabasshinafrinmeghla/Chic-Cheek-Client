import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProduct from "./Components/addProduct.jsx";
import UpdateProduct from "./Components/updateProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/product"),
  },
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/update/:id",
    element: <UpdateProduct> </UpdateProduct>,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
