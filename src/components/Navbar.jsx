import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Home } from "lucide-react";

export default function Navbar({ nav_val }) {
  return (
    <nav className="bg-gradient-to-r from-blue-100 via-red-50 to-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-[90px]">
          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-tight hover:brightness-110 transition"
          >
            eShop<span className="text-gray-400">!</span>
          </Link>

          {/* Right Section: Home Icon + Cart */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Home Icon */}
            <Link
              to="/"
              className="p-3 rounded-full hover:bg-purple-100 transition text-gray-700 hover:text-purple-600"
              aria-label="Home"
            >
              <Home size={28} strokeWidth={2} />
            </Link>

            <button
  onClick={() => window.toggleCart()}
  className="relative inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-300"
>
  {/* Cart Icon with badge */}
  <div className="relative">
    <ShoppingCart size={22} className="group-hover:scale-110 transition-transform duration-200" />
    {nav_val > 0 && (
      <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
        {nav_val}
      </span>
    )}
  </div>

  {/* Cart Text */}
  <span className="ml-2">Cart</span>
</button>


          </div>
        </div>
      </div>
    </nav>
  );
}
