import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const LatestCollection = () => {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZk7ifddzalb20QLrKJiz8FFS7L74QksvWQ&s',
      title: 'Elegant Leather Handbag',
      price: '$79.00',
      rating: 4,
      tag: 'NEW',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMYCPMhE3G9mLuUhDzJuTnrMIRgsr3ZjRTg&s',
      title: 'Blue Sports Tracksuit',
      price: '$89.00',
      rating: 5,
      tag: 'HOT',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyW7l-lLoY4nBYEnqA9ydYbUU56CgDtaq-rQ&s',
      title: 'Canon EOS R8 Camera',
      price: '$99.00',
      rating: 3,
      tag: 'NEW',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50 font-heading">
      <style>{`
        .font-heading { font-family: 'Poppins', sans-serif; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink { animation: blink 1s infinite; }

        .hover-star:hover { transform: scale(1.2); transition: transform 0.2s; }
      `}</style>

      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Latest Collection</h2>

      {/* Search Filter */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative w-80 bg-white border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            {/* Blinking Badge */}
            <span className="absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-full bg-orange-600 blink z-10">
              {product.tag}
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-58 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) =>
                i < product.rating ? (
                  <FaStar key={i} className="text-yellow-400 text-lg hover-star" />
                ) : (
                  <FaRegStar key={i} className="text-yellow-300 text-lg hover-star" />
                )
              )}
            </div>

            {/* Price + Button */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-600 text-lg font-bold">{product.price}</span>
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold animate-pulse"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Add to Cart</h3>
            <p className="mb-6 text-gray-700">You selected: <strong>{selectedProduct.title}</strong></p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestCollection;
