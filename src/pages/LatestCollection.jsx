import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Font Awesome Icons

const LatestCollection = () => {
  // Array of product data with rating
  const products = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZk7ifddzalb20QLrKJiz8FFS7L74QksvWQ&s',
      title: 'Elegant Leather Handbag',
      price: '$79.00',
      rating: 4,
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMYCPMhE3G9mLuUhDzJuTnrMIRgsr3ZjRTg&s',
      title: 'Blue Sports Tracksuit',
      price: '$89.00',
      rating: 5,
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyW7l-lLoY4nBYEnqA9ydYbUU56CgDtaq-rQ&s',
      title: 'Canon EOS R8 Camera',
      price: '$99.00',
      rating: 3,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h2 className="text-4xl font-bold mb-14 text-center text-gray-800 font-heading">
        Our Latest Collection
      </h2>

      <div className="flex flex-wrap justify-center gap-12 px-4 md:px-20">
        {products.map((product) => (
          <div
  key={product.id}
  className="w-80 h-auto bg-white border border-gray-300 rounded-xl p-5 shadow-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
>
  <img
    src={product.image}
    alt={product.title}
    className="w-full h-54 object-cover rounded-md mb-4"
  />
  <h3 className="text-lg font-semibold text-gray-900 mb-1 font-heading truncate">
    {product.title}
  </h3>
  <div className="flex items-center mb-2">
    {[...Array(5)].map((_, index) =>
      index < product.rating ? (
        <FaStar key={index} className="text-yellow-400 text-sm" />
      ) : (
        <FaRegStar key={index} className="text-yellow-400 text-sm" />
      )
    )}
  </div>

  {/* Price and Button in a row */}
  <div className="flex justify-between items-center mt-2">
    <p className="text-orange-600 text-lg font-bold font-body">{product.price}</p>
    <button className="bg-orange-500 text-white text-lg font-heading px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
      Buy Now
    </button>
  </div>
</div>

        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
