import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import DealsSection from './pages/DealsSection';
import Cart from './pages/Cart';
import LatestCollection from './pages/LatestCollection';
import DiscountBanner from './pages/DiscountBanner';
import BrandLogos from './pages/BrandLogos';
import Testimonials from './pages/Testimonials';
import NewsletterSignup from './pages/NewsLetterSignUp';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
   
      <Hero />
      <Products/>
     
    
       
        <ProductDetail/>
        <LatestCollection />
        <DealsSection />
        <Cart/>
        
        <DiscountBanner />
        <BrandLogos />
        <Testimonials />
        <NewsletterSignup />
        <Login/>
        <Register />
        <UserDashboard />
        <AdminDashboard/>
    
      <Footer />
    </div>
  );
}

export default App;