import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvier = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isItemInCart = (item) => {
    return cart.find((i) => item.id === i.id);
  };

  const addToCart = (item) => {
    if (isItemInCart(item)) {
      alert("Can't add the item to your cart twice!");
    } else {
      setCart([...cart, item]);
      alert("Item added to cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
    alert("Removed item from cart!");
  };

  const purchaseCart = () => {
    setCart([]);
    alert("Cart items purchased!");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, purchaseCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
