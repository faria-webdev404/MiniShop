// src/components/Navbar.jsx
import React from "react";
import { FiSearch, FiUserPlus } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { BsBagFill } from "react-icons/bs"; // Shopping bag icon

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md py-4 font-heading">
        <div className="container mx-auto px-4 lg:px-20 flex justify-between items-center">

          {/* Logo with Icon */}
          <div className="flex items-center space-x-2 text-3xl font-semibold text-gray-800">
            <BsBagFill className="text-orange-600" size={28} />
            <span>Mini<span className="text-orange-600">Shop</span></span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12 text-lg text-gray-600 font-medium ml-10">
            <span className="cursor-pointer hover:text-orange-600 transition">Home</span>
            <span className="cursor-pointer hover:text-orange-600 transition">Products</span>
            <span className="cursor-pointer hover:text-orange-600 transition">Cart</span>
            <span className="cursor-pointer hover:text-orange-600 transition">Deals</span>
            <span className="cursor-pointer hover:text-orange-600 transition">Contact</span>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center space-x-6 relative ml-6">

            {/* Enlarged Search Box */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-2 border border-gray-300 w-64">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
              />
              <FiSearch className="text-gray-600" size={20} />
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative ml-3">
              <TiShoppingCart className="text-gray-700 hover:text-orange-600 cursor-pointer" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>

            {/* Login Icon */}
            <FiUserPlus className="text-gray-700 hover:text-orange-600 cursor-pointer ml-2" size={28} />
          </div>
        </div>
      </nav>

      {/* Font Style */}
      <style>{`
        .font-heading {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Navbar;
