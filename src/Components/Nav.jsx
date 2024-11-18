// import React from 'react';

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo or Home */}
        <Link to="/" className="text-lg font-semibold hover:text-gray-300">
          Home
        </Link>

        {/* Navigation Menu */}
        <ul className="flex space-x-6">
          {/* New Product Dropdown */}
          <li className="relative group">
            {/* Parent Link */}
            <Link
              to="#"
              className="hover:text-gray-300 dropdown dropdown-hover">
              New Product
            </Link>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 hidden bg-gray-700 group-hover:block mt-2 py-2 w-40 rounded shadow-lg z-10">
              <li>
                <Link
                  to="/products/foundation"
                  className="block px-4 py-2 hover:bg-gray-600">
                  Foundation
                </Link>
              </li>
              <li>
                <Link
                  to="/products/eyeliner"
                  className="block px-4 py-2 hover:bg-gray-600">
                  Eyeliner
                </Link>
              </li>
              <li>
                <Link
                  to="/products/eyeshadow"
                  className="block px-4 py-2 hover:bg-gray-600">
                  Eyeshadow
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lipstick"
                  className="block px-4 py-2 hover:bg-gray-600">
                  Lipstick
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          <li>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
