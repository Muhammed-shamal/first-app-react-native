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
import { CategoryScreen } from "./category";
import { FavoritesProvider } from "./Context/favourContext";
import HomeScreen from "./Home";
import { AuthProvider } from "./Context/authContext";
import LoginScreen from "./Authentication/Login";

import firebase from "firebase/compat/app";
import '@react-native-firebase/app'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


// Custom Notification Icon Component
const NotificationIcon = ({ color, size, notificationCount }) => (
  <View>
    <Ionicons name="notifications" color={color} size={size} />
    {notificationCount > 0 && (
      <Badge
        value={notificationCount}
        status="error"
        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
      />
    )}
  </View>
);

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [notificationCount, setNotificationCount] = React.useState(5); // Example notification count


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);


  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>
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
    <AuthProvider>
      <CartProvider>
     <FavoritesProvider>
     <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#007bff",
            tabBarInactiveTintColor: "gray",
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
    name="SHOP BY CATEGORY"
    component={CategoryScreen}
    options={{
      tabBarLabel: "Categories",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bar-chart" color={color} size={size} />
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
     </FavoritesProvider>
    </CartProvider>
    </AuthProvider>
  );
}
