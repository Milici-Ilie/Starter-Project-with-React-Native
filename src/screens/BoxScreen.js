import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//🔬🔬[LAYOUT SYSTEM]🔬🔬
const BoxScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
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
    height: 300,
    // flexDirection: "row",
    // // alignItems: "center",
    // justifyContent: "center",
    // justifyContent: "center", // etc
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "orange",
    fontSize: 25,
    padding: 130,
    // zIndex: 1,
    ...StyleSheet.absoluteFillObject, // here we are setting the 'textTwoStyle' to be absolute, on top off other elements and expand to all the available content. For ex. 'position: absolute', 'top: 0, bottom: 0, right: 0, left: 0'
    // flex: 1,
    // alignSelf: "flex-end",
    justifyContent: "center",
    alignSelf: "center",
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 1,
  },
});

export default BoxScreen;
