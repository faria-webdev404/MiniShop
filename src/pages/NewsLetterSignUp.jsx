import React from 'react';

const NewsletterSignup = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        `}
      </style>

      <section
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="bg-gray-50 rounded-3xl py-20 px-8  w-full max-w-full mx-auto shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold text-orange-700 mb-4 tracking-wide">
          Stay Updated!
        </h2>
        <p className="mb-8 text-orange-900/80 text-lg max-w-4xl mx-auto">
          Subscribe to our newsletter for the latest deals and product updates.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-3xl mx-auto w-full px-4 sm:px-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 border border-orange-300 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition"
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-md transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsletterSignup;
