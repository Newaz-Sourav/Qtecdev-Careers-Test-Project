import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.find(item => item.id === action.product.id);
      if (exist) {
        return state.map(item =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];

    case "REMOVE":
      return state.filter(item => item.id !== action.id);

    case "INCREASE":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREASE":
      return state.map(item =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
