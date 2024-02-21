import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add a color" />
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
