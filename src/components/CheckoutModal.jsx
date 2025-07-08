import { useState } from "react";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function CheckoutModal({ onClose }) {
  const { cart, dispatch } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all fields!",
        confirmButtonColor: "#d33",
      });
      return;
    }

  
    Swal.fire({
      icon: "success",
      title: "🎉 Order placed successfully!",
      text: "Thank you for shopping with us.",
      showConfirmButton: false,
      timer: 2000,
    });

    dispatch({ type: "CLEAR" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🛒 Secure Checkout
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              placeholder="e.g. Abdullah"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="e.g. Abdullah@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address
            </label>
            <textarea
              name="address"
              placeholder="e.g. 1234 Elm St, Dhaka"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
