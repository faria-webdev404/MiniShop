import React, { useEffect, useState } from "react";
import Categories from "./Categories";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Your own dummy data
  const dummyProducts = [
    {
      id: 101,
      title: "Stylish Handbag",
      price: 49.99,
      category: "fashion",
      image:
        "https://sastabazzar.com/wp-content/uploads/2024/02/luxury-ladies-handbag-bags-in-pakistan-3.webp",
    },
    {
      id: 102,
      title: "Latest Wood Chair",
      price: 29.99,
      category: "furniture",
      image:
        "https://cdn.shopify.com/s/files/1/0096/4594/9013/files/800_Latest_Chairs_Design_Stylish_Chairs_Design_For_Living_Room_Bedroom_In_2022-2.jpg?v=1651309942",
    },
    {
      id: 103,
      title: "Bluetooth headphones",
      price: 99.99,
      category: "electronics",
      image:
        "https://www.ratdin.pk/cdn/shop/products/airpods-max-wireless-over-ear-headphones-active-noise-cancelling-transparency-mode-bluetooth-headphones-master-copy-872438.jpg?v=1708342011",
    },
    {
      id: 104,
      title: "Sneakers Shoes",
      price: 69.99,
      category: "fashion",
      image:
        "https://onedegree.com.pk/cdn/shop/files/39_6fb6be73-ff30-4df7-868e-00bb9b0d7771.jpg?v=1706092698&width=1206",
    },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Choose the product IDs you want to keep here:
        const selectedIds = [11, 13, 7, 10, 12, 14, 17];

        const filteredData = data.filter((product) =>
          selectedIds.includes(product.id)
        );

        // Combine fake store data and your dummy products
        const combinedProducts = [...filteredData,...dummyProducts];

        setProducts(combinedProducts);
      });
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
        .product-image {
          height: 160px;
          width: 100%;
          object-fit: contain;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          background: #f9fafb;
        }
        .price-button-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .product-price {
          font-weight: 700;
          color: #ed8936;
          font-size: 1.25rem;
        }
        .btn-primary {
          background-color: #ed8936;
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
          border: none;
        }
        .btn-primary:hover {
          background-color: #dd6b20;
        }
        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s ease;
        }
        .product-card:hover {
          box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
        }
        .product-title {
          font-weight: 600;
          font-size: 1rem;
          color: #1f2937;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
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
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title font-heading">{product.title}</h3>

            <div className="price-button-row">
              <p className="product-price">${product.price}</p>
              <button
                className="btn-primary"
                onClick={() => alert(`Added ${product.title} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
