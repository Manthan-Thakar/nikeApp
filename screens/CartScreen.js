import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useCart } from "../context/CartContext";
import { Swipeable } from "react-native-gesture-handler"; // Import Swipeable
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
const navigation = useNavigation();

  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const deliveryCharge = 50;

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryCharge;
  };

  // Swipe actions for the item
  const renderLeftActions = (item) => (
    <View style={styles.leftSwipeActions}>
      
       <TouchableOpacity
        onPress={() => incrementQuantity(item)}
        style={styles.quantityButton}
      >
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
      <Text style={styles.itemQuantity}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => decrementQuantity(item)}
        style={styles.quantityButton}
      >
        <Text style={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>

    </View>
  );

  const renderRightActions = (item) => (
    <View style={styles.rightSwipeActions}>
     <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          removeFromCart(item);
          Alert.alert("Item Removed", `${item.name} has been removed from your cart.`);
        }}
      >
        <Image source={require('../assets/nike/delete1.png')}/>
      </TouchableOpacity>
    </View>
  );

  // Render each item in the cart
  const renderCartItem = ({ item }) => (
    <Swipeable
      renderLeftActions={() => renderLeftActions(item)} // Swipe left for remove
      renderRightActions={() => renderRightActions(item)} // Swipe right for quantity controls
    >
      
        <View style={styles.cartCard}>
          <Image source={item.image} style={styles.cartImage} />
          <View style={styles.CartItemDetaiils}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        </View>

        
     
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      
      {cartItems.length === 0 ? (
 <View style={styles.emptyContainer}>
 <Image
   source={require("../assets/nike/emptyCart.png")}
   style={styles.emptyCartImage}
 />
 <Text style={styles.emptyText}>Cart is Empty !</Text>
 <TouchableOpacity onPress={() => navigation.navigate("home")}>
   <Text style={styles.addItemButton}>Add Items to the Cart</Text>
 </TouchableOpacity>
</View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.name}
          />
          <View style={styles.summaryContainer}>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal: </Text>
              <Text>${calculateSubtotal().toFixed(2)}</Text>
            </View>
            <View style={styles.deliveryChargeContainer}>
              <Text style={styles.deliveryChargeText}>Delivery: </Text>
              <Text>${deliveryCharge.toFixed(2)}</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Image
                source={require("../assets/nike/line.png")}
                style={{ width: "100%", marginTop: 10 }}
              />
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: </Text>
              <Text>${calculateTotal().toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 20,
                marginBottom: 30,
                backgroundColor: "#0D6EFD",
                width: "100%",
                height: 50,
                borderRadius: 14,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    height: 200,
    width: 200,
    opacity: 0.7,
  },
  emptyText: {
    fontSize: 25,
    color: "red",
    fontWeight: "500",
  },
  addItemButton: {
    marginTop: 20,
    borderColor: "green",
    borderRadius: 15,
    color:'#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#0D6EFD",
    fontSize: 20,
    fontWeight: "500",
  },
  cartCard: {
    borderRadius:25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    height: 150,
  },
  CartItemDetaiils: {
    marginLeft: 50,
  },
  cartImage: {
    marginLeft: 20,
    height: 75,
    width: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartItem: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemName: {
    width: 120,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    marginTop:10,
    fontSize: 16,
    color: "#555",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemQuantity: {
    fontSize: 20,
    fontWeight: "bold",
    color:'#FFFFFF'
  },
  itemSubtotal: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  leftSwipeActions: {
    borderRadius:15,
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
  rightSwipeActions: {
    borderRadius:15,
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: 50,
    
  },
  quantityButton: {
    
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  summaryContainer: {
    paddingTop: 10,
    marginTop: 10,
  },
  subtotalContainer: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtotalText: {
    fontSize: 16,
    color: "#777",
    marginVertical: 5,
  },
  deliveryChargeContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryChargeText: {
    fontSize: 16,
    color: "#777",
    marginVertical: 5,
  },
  totalContainer: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

