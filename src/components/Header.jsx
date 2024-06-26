import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container px-2 mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link className="hover:text-violet-900 transition" to="">
            Log in
          </Link>
          <Link
            className="bg-violet-700 text-white hover:bg-violet-800 px-4 py-2 rounded-lg transition"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
