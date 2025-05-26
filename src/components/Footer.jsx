
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="bg-gray-900 text-gray-300 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-semibold text-white">Mini<span className="text-orange-600">Shop</span></h2>
          <p className="max-w-xs">
            Building awesome experiences for your users. We deliver quality
            and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full max-w-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="mb-3">
            Subscribe to receive updates, news, and special offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.497v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.373 4.482A13.94 13.94 0 0 1 1.671 3.15a4.915 4.915 0 0 0 1.523 6.56 4.9 4.9 0 0 1-2.225-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.217.084 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.905 13.905 0 0 0 7.548 2.209c9.056 0 14.009-7.506 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.27 2.37 4.27 5.455v6.288zM5.337 7.433a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.722v20.555C0 23.23.792 24 1.771 24h20.451c.98 0 1.778-.77 1.778-1.723V1.722C24 .77 23.203 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
