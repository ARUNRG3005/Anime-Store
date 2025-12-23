import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children } ) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <CartContext.Provider value={{ count, increment }}>
      {children}
    </CartContext.Provider>
  );
}
