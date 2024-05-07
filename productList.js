import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomHeader from "./header";

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>Price: {item.price}</Text>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  productList: {
    flexGrow: 1,
    paddingVertical: 10,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productName: {
    fontWeight: "bold",
    marginTop: 5,
  },
  productPrice: {
    color: "green",
    marginTop: 5,
  },
});

export default ProductListScreen;
