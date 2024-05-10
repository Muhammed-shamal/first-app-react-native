import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import CustomHeader from "./header";
import CustomToast from "./toast";
import { useCart } from "./Context/cartContext";

const ProductListScreen = ({ navigation }) => {
  const [toastMessage, setToastMessage] = useState("");

  const [products, setProducts] = useState([]);

  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  // const handleAddToCart = () => {
  //   ToastAndroid.show("Successfully added to cart", ToastAndroid.SHORT);
  // };

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const isAlreadyAdded = cartItems.find((items) => items.id === item.id);
    //console.log(cartItems.find());

    if (isAlreadyAdded) {
      setToastMessage("Product is already in the cart");
    } else {
      addToCart(item);
      setToastMessage("Successfully added to cart");
    }
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      {/* Favorite Icon */}
      <TouchableOpacity style={styles.favoriteButton}>
        <FontAwesome6 name="heart" size={20} color="red" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.productImage} />

      {/* Product Name */}
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>
        {item.title}
      </Text>

      {/* Product Description */}
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.productDescription}
      >
        {item.description}
      </Text>

      {/* Product Price */}
      <Text style={styles.productPrice}>
        <Text style={styles.offerText}>Offer: {item.offer}</Text>
        <Text style={styles.priceText}>Price: </Text>
        <Text style={styles.boldText}>${item.price}</Text>
      </Text>

      {/* Delivery Info */}
      <Text style={styles.deliveryText}>Delivery by {item.deliveryDate}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <View style={styles.addCartButtonInner}>
          <Ionicons
            name="cart"
            size={20}
            color="#007bff"
            style={styles.addCart}
          />
          <Text style={styles.addCartText}>ADD TO CART</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <>
      <CustomHeader navigation={navigation} />
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
    </>
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
