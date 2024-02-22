import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//🚼🚼[MULTIPLE RERENDERS]🚼🚼
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  // we can pass the entire 'props', but also we can pass only the 'color' from our parent component. Passing the 'props' entirely we can use all the containing props if the are multiple props
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
