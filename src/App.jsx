// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext"; // Import AuthContext
import Navbar from "./components/Navbar"; // Your Navbar
import Home from "./pages/Home"; // Your Home page
import Products from "./pages/Products"; // Your Products page
import Cart from "./pages/Cart"; // Your Cart page
import Login from "./pages/Login"; // Your Login page
import Contact from "./pages/Contact"; // Your Contact page
import ProtectedRoute from "./components/ProtectedRoute"; // Protected route wrapper

const App = () => {
  return (
    <AuthProvider> {/* Wrap app with AuthContext provider */}
      <Router> {/* Wrap the entire app with Router */}
        <Navbar /> {/* Navbar always visible */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes - Only accessible when logged in */}
          <Route
            path="/products"
            element={<ProtectedRoute component={<Products />} />}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute component={<Cart />} />}
          />
          <Route
            path="/contact"
            element={<ProtectedRoute component={<Contact />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
