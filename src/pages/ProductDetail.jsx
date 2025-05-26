import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load product details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center font-body">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500 font-body">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <style>{`
        .font-heading, .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading">{product.title}</h2>
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-h-[400px] object-contain rounded-md border"
        />
        <div>
          <p className="text-gray-600 mb-4 font-body">{product.description}</p>
          <p className="text-xl font-semibold text-orange-600 mb-3 font-body">
            Price: ${product.price}
          </p>
          <div className="space-y-1 text-sm text-gray-500 font-body">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
