import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-gray-100 shadow-md fixed top-0 left-0 w-full py-4 px-6 z-10 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-500">MERN-Auth</div>
        <nav>
          <ul className="flex space-x-4 ">
            <li className="px-4">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="px-4">
              <a
                href="/about"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="px-4">
              <a
                href="/contact"
                className="text-gray-500 hover:text-gray-300 transition duration-300"
              >
                Signup
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
