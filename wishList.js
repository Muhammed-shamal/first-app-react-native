import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "./Context/favourContext";
import LottieView from "lottie-react-native";

const WishlistScreen = () => {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const {favorites} = useFavorites()
 
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating 2 seconds delay
  }, []);


  return (
    <View style={styles.container}>
      {loading ? ( // Show loading indicator if loading is true
        <ActivityIndicator size="large" color="#007bff" style={styles.loadingIndicator} />
      ) :  favorites.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your wishlist is empty</Text>
<LottieView
          source={require("./assets/Animation - 1715938625101.json")} // Replace with your JSON animation file
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />
        </View>
      ) : (
        <ScrollView>
          {favorites.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
  
};

const WishlistItem = ({ item }) => {
  const { id, title, price, image, category } = item;

  const handleRemove = (proId) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove your favour?",
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
      <TouchableOpacity style={styles.removeButton} onPress={()=>handleRemove(id)}>
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
    marginLeft: 10,
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
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },

  removeButton: {
    marginLeft: 15,
  },


  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  emptyCartText: {
    fontWeight:"bold",
    fontSize: 20,
    marginTop: 20,
  },
});

export default WishlistScreen;
