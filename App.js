import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import ProductListScreen from "./productList";
import NotificationScreen from "./notification";
import ProductDetailsScreen from './productDetails'
import CartScreen from "./cartScreen";
import WishlistScreen from "./wishList";
import ProfileScreen from "./profile";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { CartProvider } from "./Context/cartContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);


  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );

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
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#e91e63",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
        
          <Tab.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabel: "Cart",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={WishlistScreen}
            options={{
              tabBarLabel: "Wishlist",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
