// src/components/Hero.jsx
import React from "react";
import '../App.css';
import pic from '../assets/images/watch.png';

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 overflow-hidden">
        
        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f97316" fillOpacity="0.1" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 h-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-900 pb-4 leading-tight font-heading">
              Mini<span className="text-orange-600">Shop</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 pb-4 font-heading">
              Your One Stop Online Shopping Destination
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-md mx-auto lg:mx-0 font-body">
              Discover the latest trends, unbeatable deals, and top brands all in one place. Fashion, electronics, home essentials — everything you need!
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105 duration-300 font-heading">
              Start Shopping
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={pic}
              alt="Online Shopping"
              className="w-[85%] max-w-md h-auto object-cover transition-transform duration-500 transform hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </section>

      {/* Font Style */}
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Hero;
