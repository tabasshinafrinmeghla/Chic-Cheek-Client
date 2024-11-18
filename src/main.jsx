import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProduct from "./Components/addProduct.jsx";
import UpdateProduct from "./Components/updateProduct.jsx";
import Blog from "./Components/Blog.jsx";
import Contact from "./Components/Contact.jsx";
import Foundation from "./Components/Foundation";
import Eyeliner from "./Components/Eyeliner";
import Eyeshodow from "./Components/Eyeshodow.jsx";
import BlogsCard from "./Components/BlogsCard.jsx";

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
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/bloguploded",
    element: <BlogsCard></BlogsCard>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/products/foundation",
    element: <Foundation></Foundation>,
  },
  {
    path: "/products/eyeliner",
    element: <Eyeliner></Eyeliner>,
  },
  {
    path: "/products/eyeshadow",
    element: <Eyeshodow></Eyeshodow>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
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
