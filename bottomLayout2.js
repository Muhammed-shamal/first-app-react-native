import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './cartScreen'
import ProfileScreen from './profile'

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
