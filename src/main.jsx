import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './Components/addProduct.jsx';
import UpdateProduct from './Components/updateProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addProduct",
    element:  <AddProduct></AddProduct> ,
  },
  {
    path: "updateProduct",
    element: <UpdateProduct> </UpdateProduct>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
