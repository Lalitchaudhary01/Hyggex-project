import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <h2 className="dark:text-white font-bold text-2xl text-[#06286E]">
                Hyggex
              </h2>
            </div>
          </Link>
          <div className="hidden lg:block ml-[100px]">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to="/card">Flash Cards</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="lg:flex gap-x-2 ml-4">
            <button className="flex rounded-[32px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
