// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";  // Import CartContext
import Navbar from "./components/Navbar"; // Your Navbar
import Home from "./pages/Home"; // Your Home page
import Products from "./pages/Products"; // Your Products page
import Cart from "./pages/Cart"; // Your Cart page
import Login from "./pages/Login"; // Your Login page
import Contact from "./pages/Contact"; // 
import ProtectedRoute from "./components/ProtectedRoute"; 
import Footer from  './components/Footer';    
import DealsSection from "./pages/DealsSection";

const App = () => {
  return (
    <AuthProvider> {/* Wrap app with AuthContext provider */}
 {/* Wrap the entire app with Router */}
        <Navbar /> {/* Navbar always visible */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            
            <Route path="/products" element={<Products />} />
             <Route
            path="/cart"
            element={<Cart />} />
            <Route path ='/deals' element ={<DealsSection />} />
           <Route
            path="/contact"
            element={<Contact />} />
          {/* Protected Routes - Only accessible when logged in */}
         <Route
            path="/cart"
            element={<Cart />} />
          
          
          
        </Routes>
        <Footer />
    </AuthProvider>
  );
};

export default App;
