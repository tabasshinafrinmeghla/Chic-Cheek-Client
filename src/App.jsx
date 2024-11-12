// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useLoaderData } from "react-router-dom";
import "./App.css";
import ProductsCard from "./Components/ProductsCard";
import { useState } from "react";

function App() {
  const loadedProducts = useLoaderData();
  const [products, setproducts] = useState(loadedProducts);

  return (
    <>
      {/* nav */}
      <nav className="bg-gray-800 text-white flex">
        <div className="container mx-auto flex justify-between items-center p-4">
          <ul className="flex space-x-6">
            {/* Home */}
            <li>
              <a href="http://localhost:5173/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            {/* New Product with Dropdown */}

            <li className="relative group">
              <a href="#" className="hover:text-gray-300">
                New Product
              </a>
              <ul className="absolute left-0 hidden bg-gray-700 group-hover:block mt-2 space-y-2 py-2 w-40 rounded">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Foundation
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Eyeliner
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Eyeshadow
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Lipstick
                  </a>
                </li>
              </ul>
            </li>

            {/* ------------------------------------------------------------------------ */}

            {/* blog */}
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>

            {/* Contact */}
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2 flex m-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="m-2">
        {/* <h1 className="text-6xl caret-teal-900 text-center">
          All products is here : {products.length}
        </h1> */}

        <div className="nav-video-container justify-center ">
          <video
            src="/src/assets/w.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[50vh] object-cover rounded"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductsCard
              key={product._id}
              products={products}
              setproducts={setproducts}
              product={product}></ProductsCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
