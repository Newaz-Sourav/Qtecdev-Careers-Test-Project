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

            {/* Cart Button */}
            <button
              onClick={() => window.toggleCart()}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition duration-200"
            >
              <ShoppingCart size={20} />
              {nav_val > 0 && <span>({nav_val})</span>}
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
