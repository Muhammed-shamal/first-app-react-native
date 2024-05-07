import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WishlistScreen = () => {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [wishlistItems, setWishlistItems] = useState([]);

  // Dummy data for wishlist items
  const initialWishlistItems = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$15" },
  ];

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setWishlistItems(initialWishlistItems);
      setLoading(false);
    }, 1500); // Simulating 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      {loading ? ( // Show loading indicator if loading is true
        <ActivityIndicator size="large" color="#007bff" style={styles.loadingIndicator} />
      ) : (
        <ScrollView>
          {wishlistItems.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const WishlistItem = ({ item }) => {
  const { name, price } = item;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="close-circle-outline" size={24} color="#FF6347" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: "#666666",
  },
  removeButton: {
    marginLeft: 15,
  },
});

export default WishlistScreen;
