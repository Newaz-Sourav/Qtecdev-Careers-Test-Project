import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const grouped = data.reduce((acc, product) => {
          if (!acc[product.category]) acc[product.category] = [];
          acc[product.category].push(product);
          return acc;
        }, {});
        setProductsByCategory(grouped);
      });
  }, []);

  return (
    <div className="px-6 py-10 max-w-[1400px] mx-auto">
  {Object.keys(productsByCategory).map((category) => (
    <section key={category} className="mb-16">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl sm:text-3xl font-semibold capitalize text-neutral-900 tracking-wide  pb-1">
    {category}
  </h2>
  <Link
    to={`/category/${encodeURIComponent(category)}`}
    className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition duration-200"
  >
    See All &rarr;
  </Link>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsByCategory[category].slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  ))}
</div>

  );
}
