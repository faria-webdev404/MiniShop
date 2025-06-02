import React from "react";
import brand1 from "../assets/images/amazon.png";
import brand2 from "../assets/images/ebay.png";
import brand3 from "../assets/images/walmart.png";
import brand4 from "../assets/images/daraz.png";

const brands = [brand1, brand2, brand3, brand4];

const BrandLogos = () => {
  return (
    <section
      className="w-full py-24 mt-6 bg-gradient-to-r from-gray-100 via-white to-gray-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-5xl font-extrabold text-[#FF7A00] mb-16 text-center drop-shadow-md">
        Trusted by Leading E-commerce Brands
      </h2>

      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-24">
        {brands.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="h-28 object-contain filter brightness-90 hover:brightness-110 transition duration-300 cursor-pointer"
            style={{ maxWidth: "200px" }}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
