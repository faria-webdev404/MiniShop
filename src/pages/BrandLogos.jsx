import React from "react";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Shopify_logo_2018.svg", // Shopify
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ebay_logo.svg", // eBay
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Walmart_logo.svg", // Walmart
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Alibaba_Group_logo.svg", // Alibaba
];

const BrandLogos = () => {
  return (
    <section
      className="w-full py-24 bg-gradient-to-r from-gray-50 via-white to-gray-100" // lighter orange background, increased height
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
