import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { useNavigate } from "react-router-dom";
const Login = () => {
   const navigate = useNavigate();

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
            Login
          </h2>

          <form className="space-y-6">
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
                placeholder="Enter your password"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 text-lg transition"
              />
              {/* Forgot Password link aligned left */}
              <div className="text-left mt-2">
                <a
                  href="#"
                  className="text-orange-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-xl hover:bg-orange-700 shadow-lg transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 gap-3">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 font-semibold">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Sign-in Buttons */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              <FcGoogle size={24} />
              Sign in with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full border border-gray-800 rounded-xl py-3 text-gray-900 font-semibold hover:bg-gray-200 transition"
            >
              <FaGithub size={24} />
              Sign in with GitHub
            </button>
          </div>

          <p className="text-center text-gray-600 mt-10 text-base">
            Don't have an account?{' '}
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
