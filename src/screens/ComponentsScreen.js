import React from "react";
import { Text, StyleSheet, View } from "react-native"; //the 'View' element will bring multiple elements togheter

const ComponentsScreen = () => {
  const name = "Ilie Milici"; // we created a variable that can be called anywhere in our code later in the right conditions
  const goodBye = <Text>Good Bye</Text>; // another exemple

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.textStyles}>My name is {name}</Text>
      {goodBye}
    </View>
  ); // here we use <View>...</View> element to wrap multiple elements
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyles: {
    fontSize: 20,
  },
}); //👶👶[FIRST STEPS]👶👶 this is how we need to create styles in React Native, also NOTE❗ that always we need to import the 'React' and 'Text, SttyleSheet' to take effect where we need them

export default ComponentsScreen;
