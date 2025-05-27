// src/components/Navbar.jsx
import React from "react";
import { FiSearch, FiUserPlus } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { BsBagFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Firebase Auth
import { signOut } from "firebase/auth"; // Sign out function
// import { useAuth } from "../context/AuthContext"; // Removed unused import

const Navbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Get the currently logged-in user

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md py-4 font-heading">
        <div className="container mx-auto px-4 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-3xl font-semibold text-gray-800">
            <BsBagFill className="text-orange-600" size={28} />
            <span>
              Mini<span className="text-orange-600">Shop</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12 text-lg text-gray-600 font-medium ml-10">
            {["/", "/products", "/cart", "/deals", "/contact"].map((path, index) => {
              const names = ["Home", "Products", "Cart", "Deals", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "hover:text-orange-600 transition"
                  }
                >
                  {names[index]}
                </NavLink>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6 relative ml-14">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-2 border border-gray-300 w-64">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
              />
              <FiSearch className="text-gray-600" size={20} />
            </div>

            {/* Cart */}
            <div className="relative ml-3">
              <TiShoppingCart className="text-gray-700 hover:text-orange-600 cursor-pointer" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>

            {/* Authentication */}
            {!user ? (
              <NavLink to="/login">
                <FiUserPlus className="text-gray-700 hover:text-orange-600 cursor-pointer ml-2" size={28} />
              </NavLink>
            ) : (
              <div className="flex items-center space-x-5">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border-2 border-orange-500"
                />
                <span className="text-gray-800 text-lg font-medium">{user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className=" bg-orange-500 text-lg text-white font-semibold font-heading px-5 py-2 rounded hover:bg-orange-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Poppins font */}
      <style>{`
        .font-heading {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
}

export default Navbar;
