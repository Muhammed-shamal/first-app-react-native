import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "./productList";
import ProductDetailsScreen from "./productDetails";
import NotificationScreen from "./notification";
import WishlistScreen from "./wishList";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { CartProvider } from "./Context/cartContext";
import BottomNav from "./bottomLayout2";


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LottieView
          source={require("./assets/Animation2.json")} // Replace with your JSON animation file
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={{ title: "Product List" }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: "Product Details" }}
          />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="wishlist" component={WishlistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNav />
    </CartProvider>
  );
}
