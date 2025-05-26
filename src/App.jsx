import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import DealsSection from './pages/DealsSection';
import Login from './pages/Login';
import Register from './pages/Register'
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
     <Routes>
  <Route path="/" element={<Home />} />          {/* Home page with multiple sections */}
  <Route path="/products" element={<Products />} /> {/* Separate Products page */}
  <Route path="/cart" element={<Cart />} />          {/* Separate Cart page */}
  <Route path="/deals" element={<DealsSection />} /> 

   <Route path="/login" element={<Login />} />
  <Route path="/register" element ={<Register />} />    {/* Separate Deals page */}    {/* Separate Contact page */}
</Routes>

      <Footer />
    </div>
  );
}

export default App;