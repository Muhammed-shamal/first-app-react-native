import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "./Context/cartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const { id, title, price, quantity, image, category } = item;

  const handleRemove = (proId) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from the cart?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            if (proId) {
              removeFromCart(proId);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

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
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(id)}>
          <Ionicons name="close-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 4,
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

export default CartItem;
