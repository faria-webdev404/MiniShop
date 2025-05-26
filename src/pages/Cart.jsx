import React from 'react';

const Cart = () => {
  // Dummy cart items
  const cartItems = [
    {
      id: 1,
      title: 'Smartphone',
      price: 299,
      quantity: 1,
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
    {
      id: 2,
      title: 'Headphones',
      price: 99,
      quantity: 2,
      thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpg',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-10 font-body">
        <style>{`
          .font-heading, .font-body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <h2 className="text-4xl font-heading font-bold mb-10 text-gray-900 border-b pb-4">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center mt-20 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-8">
              {cartItems.map(item => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full max-w-[150px] sm:w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 font-heading">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">Quantity: {item.quantity}</p>
                    <p className="mt-4 font-semibold text-orange-600 text-xl sm:text-2xl">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total + Button container */}
            <div className="mt-14 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
              <p className="text-3xl font-bold text-gray-900">
                Total: <span className="text-orange-600">${total.toFixed(2)}</span>
              </p>
              <button className="px-10 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition whitespace-nowrap">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
