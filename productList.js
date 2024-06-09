import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,ToastAndroid  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "./Context/favourContext";
import CustomToast from "./toast";

import { useCart } from "./Context/cartContext";

const ProductListScreen = () => {
  const navigation = useNavigation();
  const {isFavorite,toggleFavorite} = useFavorites();
  const {addToCart,cartItems} = useCart()
  const [toastMessage,setToastMessage] = useState('')
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.find((items) => items.id === item.id);
    if (isAlreadyAdded) {
      setToastMessage("Product is already in the cart");
    } else {
      addToCart(item);
      setToastMessage("Successfully added to cart");
    }
};

useEffect(() => {
    const timer = setTimeout(() => {
        setToastMessage(""); // Reset the toast message after a short delay
    }, 500); // 3000 milliseconds (3 seconds) delay

    return () => clearTimeout(timer); // Cleanup the timer
}, [toastMessage]); // Re-run this effect whenever toastMessage changes


  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <TouchableOpacity style={styles.favoriteButton} onPress={()=>toggleFavorite(item)}>
        <Ionicons
          name={isFavorite(item.id) ? "heart" : "heart-outline"}
          size={20}
          color="red"
        />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>
        {item.title}
      </Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.productDescription}>
        {item.description}
      </Text>
      <Text style={styles.productPrice}>
        <Text style={styles.priceText}>Price: </Text>
        <Text style={styles.boldText}>${item.price}</Text>
      </Text>
      <TouchableOpacity style={styles.addCartButton} onPress={() => handleAddToCart(item)}>
        <View style={styles.addCartButtonInner}>
          <Ionicons name="cart" size={20} color="#007bff" style={styles.addCart} />
          <Text style={styles.addCartText}>ADD TO CART</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
        {toastMessage !== "" && <CustomToast message={toastMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  productList: {
    marginTop: 5,
    flexGrow: 1,
    paddingVertical: 10,
  },
  productCard: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
  },
  productImage: {
    marginTop: 20,
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productName: {
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 16,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  productPrice: {
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "black",
  },
  offerText: {
    color: "red",
    marginRight: 5,
  },
  priceText: {
    color: "black",
  },
  deliveryText: {
    marginTop: 5,
    color: "#666",
  },
  addCartButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 4,
    marginTop: 8,
  },
  addCartButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  addCart: {
    marginRight: 10,
  },
  addCartText: {
    color: "#007bff",
    fontSize: 12,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },

});

export default ProductListScreen;
