import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-gray-100 shadow-md fixed top-0 left-0 w-full py-4 px-6 z-10 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-500">
          <Link to="/">MERN-Auth</Link>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <li className="px-4">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/login"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/signup"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
