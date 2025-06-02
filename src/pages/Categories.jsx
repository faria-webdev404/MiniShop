import React from 'react';

const categories = ["all", "electronics", "clothing", "furniture","fashion"];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  return (
    <>
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="flex flex-wrap gap-3 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`capitalize px-5 py-2 rounded-full text-sm font-medium border transition duration-300 ${
              selectedCategory === cat
                ? "bg-orange-600 text-white border-orange-600 shadow-md font-body"
                : "bg-white text-gray-800 border-gray-300 hover:bg-orange-50 hover:border-orange-600 font-body"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
