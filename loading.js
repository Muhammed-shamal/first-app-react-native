import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    // Simulating data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating 2 seconds delay

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#007bff"
            style={styles.loadingContainer}
          />
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withLoading;

