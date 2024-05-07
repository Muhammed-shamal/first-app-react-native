// CartScreen.js

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
  // Dummy data for cart items
  const cartItems = [
    { id: 1, name: "Product 1", price: "$10", quantity: 2 },
    { id: 2, name: "Product 2", price: "$20", quantity: 1 },
    { id: 3, name: "Product 3", price: "$15", quantity: 3 },
  ];

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
  const { name, price, quantity } = item;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
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
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {},
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
