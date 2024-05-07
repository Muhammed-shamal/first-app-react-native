import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "./productList";
import ProductDetailsScreen from "./productDetails";
import CustomHeader from "./header";
import "react-native-gesture-handler";
import BottomNavigation from "./bottomheader";
import SplashScreen from "./splashScreen";

import NotificationScreen from "./notification";
import CartScreen from "./cartScreen";
import WishlistScreen from "./wishList";
import ProfileScreen from "./profile";
import withLoading from "./loading";

const Stack = createStackNavigator();

export default function App() {
  const Cart = withLoading(CartScreen);
  const WishList = withLoading(WishlistScreen);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="x" component={SplashScreen} />
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
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="wishlist" component={WishList} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
}
