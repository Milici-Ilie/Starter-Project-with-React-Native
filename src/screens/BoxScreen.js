import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//🔬🔬[LAYOUT SYSTEM]🔬🔬
const BoxScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
