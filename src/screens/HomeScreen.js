import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <Text style={styles.text}>
      My first attent to create a native mobile app.
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;