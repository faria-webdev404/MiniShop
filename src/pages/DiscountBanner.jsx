import React from 'react';

const DiscountBanner = () => {
  return (
    <section
      className="bg-orange-100 w-full max-w-5xl mx-auto py-12 px-6 sm:px-12 text-center rounded-xl shadow-lg font-heading my-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-orange-700">
        🎉 Limited Time Offer!
      </h2>
      <p className="text-orange-800 mb-8 text-lg sm:text-xl">
        Get <strong className="font-bold text-orange-900">30% off</strong> on your first purchase. Use code{' '}
        <span className="bg-orange-700 text-white px-3 py-1 rounded-full font-mono text-base sm:text-lg">
          WELCOME30
        </span>{' '}
        at checkout.
      </p>
      <button
        className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-10 py-4 rounded-full text-lg sm:text-xl transition duration-200"
      >
        Shop Now
      </button>
    </section>
  );
};

export default DiscountBanner;
