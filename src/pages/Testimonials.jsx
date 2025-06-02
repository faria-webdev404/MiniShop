import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ayesha",
    quote: "Absolutely love the quality and fast shipping. Highly recommend!",
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: "Ali",
    quote: "Customer service was top-notch. The products exceeded my expectations.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara",
    quote: "Stylish and affordable. My new go-to online shop!",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Hassan",
    quote: "I keep coming back. Great variety and fast delivery!",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Fatima",
    quote: "Loved the packaging and product quality. Impressive experience!",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Usman",
    quote: "Highly recommend for value and speed of service.",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setStartIndex(prev => (prev + 3) % testimonials.length);
  };

  const currentTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="py-24 h-[500px] px-8 text-center bg-orange-50 font-heading">
      <h2 className="text-4xl font-bold mb-10 text-orange-700">What Our Customers Say</h2>
      <div className="flex justify-center items-center gap-6 relative max-w-7xl mx-auto">

        {/* Left Arrow */}
        <button onClick={handlePrev} className="text-orange-600 hover:text-orange-800 transition">
          <ChevronLeft size={40} />
        </button>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {currentTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              />
              <p className="text-gray-700 italic mb-3">"{t.quote}"</p>
              <h4 className="mt-2 font-semibold text-orange-800">{t.name}</h4>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="text-orange-600 hover:text-orange-800 transition">
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
