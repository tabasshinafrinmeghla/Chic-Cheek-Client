// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useLoaderData } from "react-router-dom";
import "./App.css";
import ProductsCard from "./Components/ProductsCard";
import { useState } from "react";
// import Foundation from "./Components/Foundation";

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
                  <a
                    href="<Foundation></Foundation>"
                    className="block px-4 py-2 hover:bg-gray-600">
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
      {/* banner --------------------------------- */}

      <div className="m-10">
        <div className="diff aspect-[16/9] w-full h-[50vh] object-cover rounded">
          <div className="diff-item-1 ">
            <img alt="daisy" src="/src/assets/f.jpg" />
          </div>
          <div className="diff-item-2 ">
            <img alt="daisy" src="/src/assets/d.jpg" />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      {/* footer ---------------------------------------------------------------------------------------*/}

      <footer className="footer footer-center bg-gray-800 text-white  rounded p-10 ">
        <nav className="grid grid-flow-col gap-4">
          <a href="http://localhost:5173/#" className="link link-hover">
            Home
          </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
