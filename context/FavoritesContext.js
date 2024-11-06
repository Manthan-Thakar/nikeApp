import React, { createContext, useContext, useState } from "react";

// Create a context for favorites
const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add an item to favorites
  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  // Function to remove an item from favorites
  const removeFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favItem) => favItem.name !== item.name)
    );
  };

  // Check if an item is already a favorite
  const isFavorite = (item) => {
    return favorites.some((favItem) => favItem.name === item.name);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
