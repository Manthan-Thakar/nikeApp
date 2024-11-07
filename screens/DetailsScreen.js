import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext'; // Import CartContext
import FontAwesome from "@expo/vector-icons/FontAwesome";
import data from "../data/data"; // Assuming this is an array of related items

export default function DetailsScreen({ route }) {
  const [numberOfLines, setNumberOfLines] = useState(4);
  const [isFull, setIsFull] = useState(false);
  const { item } = route.params; // The item passed from the previous screen
  const navigation = useNavigation();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart(); // Use the addToCart function

  // Determine if the current item is a favorite
  const isItemFavorite = isFavorite(item);

  const handleFavoriteToggle = () => {
    if (isItemFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  const handleAddToCart = () => {
    addToCart(item); // Add the item to the cart
    Alert.alert("Item Added", `${item.name} has been added to your cart.`); // Display alert
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[item]} // Display just the item passed to the screen
        renderItem={({ item }) => (
          <>
            <View style={styles.namepriceContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>Men’s Shoes</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>

           
            <FlatList
              style={{ marginTop: 20 }}
              horizontal
              data={data} 
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.imageThumbnail}
                  onPress={() => navigation.navigate("details", { item })}
                >
                  <Image source={item.image} style={styles.thumbnailImage} />
                </TouchableOpacity>
              )}
            />

            <View style={styles.descriptionContainer}>
              <Text style={styles.description} numberOfLines={numberOfLines}>
                {item.description}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setIsFull(!isFull);
                  setNumberOfLines(isFull ? 4 : 20); 
                }}
              >
                <Text
                  style={{
                    color: "#0D6EFD",
                    fontSize: 14,
                    marginLeft: "75%",
                    marginTop: 10,
                    width: 100,
                  }}
                >
                  {isFull ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.favButton} onPress={handleFavoriteToggle}>
          <FontAwesome
            name={isItemFavorite ? "heart" : "heart-o"}
            size={30}
            color={isItemFavorite ? "red" : "black"}
            style={styles.favButtonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Image
            source={require("../assets/nike/cart.png")}
            style={styles.cartButtonImage}
          />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  namepriceContainer: {
    marginTop: 20,
    height: 150,
  },
  name: {
    fontWeight: "bold",
    fontSize: 26,
    width: 259,
  },
  category: {
    marginTop: 10,
    fontWeight: "medium",
    fontSize: 16,
    color: "#707B81",
  },
  price: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: "semibold",
    width: 89,
    color: "2B2B2B",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    color: "#707B81",
    width: '102%',
  },
  bottomButtons: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-around",
    bottom: 40,
  },
  favButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  favButtonImage: {},
  cartButton: {
    flexDirection: "row",
    width: 208,
    height: 50,
    backgroundColor: "#0D6EFD",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 15,
  },
  cartButtonImage: {
    width: 24,
    height: 24,
  },
  cartButtonText: {
    color: "#FFFFFF",
    fontWeight: "semibold",
    fontSize: 14,
  },
  imageThumbnail: {
    height: 100,
    width: 120,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#d3e0ed",
  },
  thumbnailImage: {
    height: 60,
  },
});
