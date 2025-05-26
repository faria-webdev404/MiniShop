import React from 'react';

const Register = () => {
  return (
    <>
      <section
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white px-6"
      >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
          `}
        </style>

        <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10 tracking-wide">
            Register
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-xl hover:bg-orange-700 shadow-lg transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-10 text-base">
            Already have an account?{' '}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
