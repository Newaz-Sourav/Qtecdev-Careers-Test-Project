import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  
  const isAltTitle = parseInt(id) % 2 === 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-white to-blue-50 px-6 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12 p-10">
        
        
        <div>
          {isAltTitle ? (
            <div>
  <p className="text-indigo-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1">
    Limited Time Offer
  </p>

  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight flex flex-wrap items-center gap-2">
    <span>🔥</span>
    <span className="break-words">{product.title}</span>
    <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-[10px] sm:text-xs font-bold select-none">
      Hot
    </span>
  </h1>

  <p className="text-gray-600 italic text-sm sm:text-base mb-6">
    Get yours now with exclusive discount!
  </p>
</div>

          ) : (
            <div>
              <h1 className="text-5xl font-bold text-blue-900 mb-3">
                Discover the Power of <span className="text-indigo-600">Elegance</span>
              </h1>
              <p className="text-xl text-gray-700 font-medium mb-2">
                {product.title}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Only a few left in stock — order soon!
              </p>
            </div>
          )}
        </div>

        {/* Image section */}
        <div className="flex items-center justify-center bg-white rounded-2xl p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

        {/* Details section */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Category badge */}
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold tracking-wide uppercase rounded-full px-3 py-1 mb-4 shadow-sm">
              {product.category}
            </span>

            
            {!isAltTitle && (
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {product.title}
              </h2>
            )}

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(product.rating.rate) ? 'fill-current' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.115 3.43a1 1 0 00.95.69h3.6c.969 0 1.371 1.24.588 1.81l-2.915 2.12a1 1 0 00-.364 1.118l1.115 3.43c.3.921-.755 1.688-1.538 1.118L10 13.347l-2.915 2.12c-.783.57-1.838-.197-1.538-1.118l1.115-3.43a1 1 0 00-.364-1.118L3.383 8.857c-.783-.57-.38-1.81.588-1.81h3.6a1 1 0 00.95-.69l1.115-3.43z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">{product.rating.count} reviews</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-50">
              {product.description}
            </p>
          </div>

          {/* Price and Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="text-5xl font-extrabold text-indigo-600">${product.price}</span>
            </div>

            <button
              onClick={() => dispatch({ type: "ADD", product })}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Add to cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
