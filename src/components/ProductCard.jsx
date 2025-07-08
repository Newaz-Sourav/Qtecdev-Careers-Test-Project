import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { Toast } from "./Toast";


export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [showToast, setShowToast] = useState(false);

  function handleAddToCart() {
    dispatch({ type: "ADD", product });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-between">
        <Link to={`/product/${product.id}`}>
                        {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                  }}
                  className="w-full h-48 object-contain rounded-xl bg-white"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500 text-center">
                  Image not available
                </div>
              )}

          <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </Link>

        <div className="mt-2 pt-4 flex items-center justify-between border-t border-gray-200">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white text-sm px-4 py-2 rounded-full transition"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Toast Popup */}
      
      <Toast show={showToast} message={`${product.title} added to cart!`} />
    </>
  );
}
