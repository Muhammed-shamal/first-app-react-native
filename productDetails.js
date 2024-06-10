// ProductDetails.js

import {React,useState,useEffect} from "react";
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity, Vibration } from "react-native";
import { useCart } from "./Context/cartContext";
import CustomToast from "./toast";
//import PrivateRoute from "./Authentication/isAuthenticated";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  const {addToCart,cartItems} = useCart()
  const [toastMessage,setToastMessage] = useState('')


  const handleBuyNow = () => {
    // Implement buy now functionality
  };

  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.find((items) => items.id === item.id);
    if (isAlreadyAdded) {
      setToastMessage("Product is already in the cart");
      Vibration.vibrate()
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




  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>Price: {product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productCategory}>Category: {product.category}</Text>

        <View style={styles.buttonsContainer}>
  {/* Buy Now Button */}
  <TouchableOpacity style={[styles.button, styles.buyNowButton]} onPress={handleBuyNow}>
    <Text style={styles.buyNowButtonText}>Buy Now</Text>
  </TouchableOpacity>

  {/* Add to Cart Button */}
  <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={handleAddToCart}>
    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
  </TouchableOpacity>
</View>

{toastMessage !== "" && <CustomToast message={toastMessage} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  productCategory: {
    fontSize: 16,
    color: "blue",
    marginBottom: 20,
  },


  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buyNowButtonText:{color:"#007bff",fontSize: 16,
  fontWeight: 'bold',},
  
  buyNowButton: {
    //backgroundColor: 'transparent', // Transparent background
    borderWidth: 2, // Border width
    borderColor: '#007bff', // Border color
    marginRight: 5,
  },
  addToCartButton: {
    backgroundColor: '#007bff', // Filled background color
    marginLeft: 5,
  },
});

export default ProductDetailsScreen;
