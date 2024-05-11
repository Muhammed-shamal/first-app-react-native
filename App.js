// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductListScreen from "./productList";
import ProductDetail from "./productDetails";
import ProfileScreen from "./profile";
import CartScreen from "./cartScreen";
import { CartProvider } from "./Context/cartContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductList" component={ProductListScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetail} />
  </Stack.Navigator>
);

// const ProfileStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//   </Stack.Navigator>
// );

// const SettingsStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//   </Stack.Navigator>
// );

const App = () => (
  <CartProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </CartProvider>
);

export default App;
