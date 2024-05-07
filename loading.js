import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const withLoading = (WrappedComponent) => {
  return ({ loading, setLoading, ...props }) => {
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <WrappedComponent {...props} />
        )}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withLoading;
