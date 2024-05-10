import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = (x) => {
  console.log(x);
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Categories")}
      >
        <AntDesign name="bars" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, styles.navItemLast]}
        onPress={() => navigation.navigate("Cart")}
      >
        <AntDesign name="shoppingcart" size={21} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, styles.navItemMiddle]}
        onPress={() => navigation.navigate("wishlist")}
      >
        <AntDesign name="hearto" size={21} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("profile")}
      >
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
});

export default BottomNavigation;
