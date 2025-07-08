import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
   <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-between">
  <Link to={`/product/${product.id}`}>
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-contain rounded-xl bg-white"
    />
    <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
      {product.description}
    </p>
  </Link>

  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200">
    <span className="text-lg font-bold text-gray-900">${product.price}</span>
    <button
       onClick={() => dispatch({ type: "ADD", product })}
      className="bg-orange-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition"
    >
      🛒 Add to Cart
    </button>
  </div>
</div>



  );
}
