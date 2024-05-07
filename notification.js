// NotificationScreen.js

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <NotificationCard
          icon="notifications-outline"
          title="New Notification"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NotificationCard
          icon="alert-circle-outline"
          title="Alert"
          content="This is an important notification!"
        />
        <NotificationCard
          icon="checkmark-circle-outline"
          title="Success"
          content="Your order has been successfully delivered."
        />
      </ScrollView>
    </View>
  );
};

const NotificationCard = ({ icon, title, content }) => {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={24} color="black" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    flexWrap: "wrap",
  },
});

export default NotificationScreen;
