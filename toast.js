import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const CustomToast = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });

    setTimeout(() => {
      setVisible(false);
    }, duration);
  }, []);

  return visible ? (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
    <Text style={styles.message}>
      {message}
      {message === "Product is already in the cart" && (
        <Ionicons name="warning" size={20} color="red" style={styles.icon} />
      )}
    </Text>
  </Animated.View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
 
  
  message: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginLeft: 20, // space between text and icon
  },
});

export default CustomToast;
