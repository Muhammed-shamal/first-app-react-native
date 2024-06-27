import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useCart } from "./Context/cartContext";
import CartItem from "./cartItems";

const CartScreen = () => {
  const { cartItems } = useCart();

  console.log(cartItems);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Image
            source={require("./assets/empty_cart_image.jpg")} // Replace with your empty cart image
            style={styles.emptyCartImage}
          />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      ) : (
        <ScrollView>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontSize: 20,
    marginTop: 20,
  },
});

export default CartScreen;
