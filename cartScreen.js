import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "./Context/cartContext";

const CartScreen = () => {
  const { cartItems } = useCart();

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const CartItem = ({ item }) => {
  const { title, price, quantity, description, image, category } = item;

  return (
    <View style={styles.itemContainer}>
    <Image source={{ uri: image }} style={styles.itemImage} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemCategory}>Category: {category}</Text>
      <Text style={styles.itemPrice}>Price: {price}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="close-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#007bff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  itemDescription: {
    color: "#666",
    marginBottom: 5,
  },
  itemCategory: {
    color: "#666",
    marginBottom: 5,
  },
  itemPrice: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginRight: 10,
  },
  removeButton: {},
});

export default CartScreen;
