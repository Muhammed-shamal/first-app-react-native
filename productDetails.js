// ProductDetails.js

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

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
});

export default ProductDetailsScreen;
