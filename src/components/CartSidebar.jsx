import { useState, useEffect, forwardRef } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

const CartSidebar=forwardRef((props,ref)=>{
  const { cart, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.toggleCart = () => setIsOpen((prev) => !prev);
  }, []);

  const sendcount = ref;



  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

  sendcount.current=totalItems;

  return (
    <div>
      <div
        className={`shadow-2xl w-[300px] sm:w-full fixed bg-white top-0 right-0 max-w-sm h-full z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight flex items-center gap-2">
            🛒 Your Cart
            {totalItems > 0 && (
              <span className="text-xs  text-green-800 px-2 py-1 rounded-full">
                {totalItems} item{totalItems > 1 ? "s" : ""}
              </span>
            )}
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="px-6 py-4 overflow-y-auto h-[65%]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 border rounded-lg p-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-md bg-gray-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                        className="text-gray-400 hover:text-red-600 text-sm"
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-semibold text-gray-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch({ type: "DECREASE", id: item.id })}
                          className="w-7 h-7 rounded border border-gray-300 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({ type: "INCREASE", id: item.id })}
                          className="w-7 h-7 rounded border border-gray-300 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-16 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-800">Total:</span>
            <span className="text-xl font-bold text-green-600">${total}</span>
          </div>
          <button
            onClick={() => {
              setShowModal(true);
              setIsOpen(false);
            }}
            disabled={cart.length === 0}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showModal && <CheckoutModal onClose={() => setShowModal(false)} />}
    </div>
  );
})

export default CartSidebar

