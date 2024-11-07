import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from AsyncStorage when the app starts
  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCart = await AsyncStorage.getItem("cartItems");
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Failed to load cart from AsyncStorage", error);
      }
    };

    loadCartFromStorage();
  }, []);

  // Save cart data to AsyncStorage whenever it changes
  useEffect(() => {
    const saveCartToStorage = async () => {
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save cart to AsyncStorage", error);
      }
    };

    saveCartToStorage();
  }, [cartItems]);

  // Add item to cart or update quantity if already in the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItemIndex >= 0) {
        // Item already in cart, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1; // Increase quantity
        return updatedItems;
      } else {
        // New item, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== item.name)
    );
  };

  // Increment quantity of item in cart
  const incrementQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (itemIndex >= 0) {
        updatedItems[itemIndex].quantity += 1;
      }
      return updatedItems;
    });
  };

  // Decrement quantity of item in cart (don't go below 1)
  const decrementQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (itemIndex >= 0 && updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity -= 1;
      }
      return updatedItems;
    });
  };

  // Check if the item is already in the cart
  const isInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.name === item.name);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
