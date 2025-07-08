import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) => product.category === name);
        setProducts(filtered);
      });
  }, [name]);

  const formattedName = decodeURIComponent(name)
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="bg-gray-200 min-h-screen w-full flex flex-col items-center py-12 px-4">
      {/* Title */}
      <div className="max-w-screen-lg w-full text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight capitalize">
          {formattedName}
        </h2>
        <p className="text-gray-500 text-sm">
          Browse all items available in <span className="font-medium">{formattedName}</span>
        </p>
      </div>

      {/* Product Grid or No Product */}
      <div className="max-w-screen-xl w-full">
        {products.length === 0 ? (
          <div className="text-center bg-yellow-50 border border-yellow-300 text-yellow-800 p-6 rounded-lg shadow-sm">
            <p className="text-lg font-medium">No products found in this category.</p>
            <Link to="/" className="text-blue-600 mt-3 inline-block hover:underline">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
