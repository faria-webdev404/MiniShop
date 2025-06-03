import React from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-6"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
        {/* Left Side - Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-600 mb-4">Let's <span className="text-orange-600">Connect</span></h2>
          <p className="text-gray-600 text-lg mb-6">
            Have a question, proposal, or just want to say hi? Fill out the form and I’ll get back to you as soon as possible. I’d love to hear from you!
          </p>
          
        </div>

        {/* Right Side - Form Section */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
