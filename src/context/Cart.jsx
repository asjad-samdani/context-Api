/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
//context
export const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export const CartProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  return (
    <CartContext.Provider value={{ item, setItem }}>
      {children}
    </CartContext.Provider>
  );
};
