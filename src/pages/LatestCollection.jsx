import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const LatestCollection = () => {
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
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }

        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .buy-button {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .buy-button:hover {
          background-color: #c2410c;
          transform: scale(1.05);
        }
      `}</style>

      <h2 className="text-4xl font-bold mb-14 text-center text-gray-800 font-heading">
         Our Latest Collection 
      </h2>

      <div className="flex flex-wrap justify-center gap-12 px-4 md:px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-80 h-auto bg-white border border-gray-200 rounded-2xl p-5 shadow-md product-card cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-xl mb-4 product-image"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading truncate">
              {product.title}
            </h3>

            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) =>
                index < product.rating ? (
                  <FaStar key={index} className="text-yellow-400 text-base" />
                ) : (
                  <FaRegStar key={index} className="text-yellow-400 text-base" />
                )
              )}
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="text-orange-600 text-lg font-bold font-body">
                {product.price}
              </p>
              <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md buy-button font-heading">
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
