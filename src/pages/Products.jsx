import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="px-4 py-10 md:px-20 bg-gray-50">
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-heading">
        Browse by Category
      </h2>

      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 block"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-3"
            />
            <h3 className="font-semibold text-md text-gray-800 line-clamp-2 font-heading">
              {product.title}
            </h3>
            <p className="mt-1 text-orange-600 font-bold font-body">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
