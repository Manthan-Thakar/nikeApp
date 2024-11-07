import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFavorites } from '../context/FavoritesContext'; // Import the favorites context
import { useCart } from '../context/CartContext'; // Import the cart context

export default function Card({ filter, name, image, price, onPress, description }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToCart, removeFromCart, isInCart } = useCart(); // Destructure cart context functions

  // Wrap item in an object so it's compatible with the context functions
  const item = { name, image, price, filter, description };

  // Determine if the current item is a favorite
  const isItemFavorite = isFavorite(item);

  const handleFavoriteToggle = () => {
    if (isItemFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    addToCart(item); // Add item to cart
  };

  // Handle removing from cart
  const handleRemoveFromCart = () => {
    removeFromCart(item); // Remove item from cart
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <FontAwesome
          name={isItemFavorite ? "heart" : "heart-o"}
          size={24}
          color={isItemFavorite ? "red" : "black"}
          onPress={handleFavoriteToggle}
          style={{ top: 10, left: 10 }}
        />
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.data}>
          <Text style={styles.filter}>{filter}</Text>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity
          style={styles.plus}
          onPress={isInCart(item) ? handleRemoveFromCart : handleAddToCart} 
        >
          <Text style={styles.plusText}>{isInCart(item) ? "Remove" : "+"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 14,
    paddingBottom: 15,
    width: 153,
  },
  image: {
    marginTop: 20,
    height: 97,
    width: "100%",
  },
  subContainer: {
    flexDirection: "row",
    width: "100%",
  },
  plus: {
    position: "absolute",
    right: 10,
    bottom: 0,
    padding: 10,
    backgroundColor: "#0D6EFD",
    borderTopStartRadius: 15,
    borderEndEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  plusText: {
    fontSize: 16,
    color: "white",
  },
  data: {
    marginTop: 10,
    paddingLeft: 20,
  },
  filter: {
    fontSize: 12,
    color: "#0D6EFD",
    fontWeight: "medium",
  },
  name: {
    width: 80,
    marginTop: 8,
    fontSize: 16,
    color: "#6A6A6A",
    fontWeight: "semibold",
  },
  price: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: "medium",
  },
});
