import React from 'react';

const LatestCollection = () => {
  return (
    <section className="py-12 bg-white">
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-heading">
       Our Latest Collection
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-20">
        {[4, 5, 6].map((item) => (
          <div
            key={item}
            className="w-72 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7YW4QA4Oxw9HVOO9WxghCI0GuhnVdhkLqA&s+${item}`}
              alt={`New ${item}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading truncate">
              New Product {item}
            </h3>
            <p className="text-orange-600 font-bold font-body">$79.00</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
