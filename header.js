import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.logoContainer}>
          <Text style={styles.logo}>YourLogo</Text>
        </TouchableOpacity> */}
        <View style={styles.navItems}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Notifications")}
          >
            <AntDesign name="bells" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navItem, styles.navItemMiddle]}
            onPress={() => navigation.navigate("wishlist")}
          >
            <AntDesign name="hearto" size={21} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navItem, styles.navItemLast]}
            onPress={() => navigation.navigate("Cart")}
          >
            <AntDesign name="shoppingcart" size={21} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "column",
    backgroundColor: "#fff",

    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  //logoContainer: { marginTop: 20 },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navItems: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  navItem: {
    marginLeft: 10,
  },
  navItemFirst: {
    marginLeft: 0,
  },
  navItemMiddle: {
    marginLeft: 10,
  },
  navItemLast: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {},
});

export default CustomHeader;
