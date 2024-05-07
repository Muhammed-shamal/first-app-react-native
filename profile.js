// ProfileScreen.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person" size={100} color="#007bff" />

        <Text style={styles.username}>Shamal</Text>
        <Text style={styles.email}>shamal@gmail.com</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="pencil-outline" size={24} color="#007bff" />
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Ionicons name="mail-outline" size={24} color="#007bff" />
          <Text style={styles.sectionText}>Change Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Ionicons name="key-outline" size={24} color="#007bff" />
          <Text style={styles.sectionText}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Ionicons name="notifications-outline" size={24} color="#007bff" />
          <Text style={styles.sectionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Ionicons name="color-palette-outline" size={24} color="#007bff" />
          <Text style={styles.sectionText}>Theme</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <View style={styles.logoutButtonInner}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#007bff"
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  editText: {
    color: "#007bff",
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
  },
  logoutButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    color: "#007bff",
    fontSize: 16,
  },
});

export default ProfileScreen;
