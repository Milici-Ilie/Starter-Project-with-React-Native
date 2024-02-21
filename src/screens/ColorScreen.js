import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = ({ navigation }) => {
  const [randomColor, setRandomColor] = useState([]); //state for the random colors

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setRandomColor([...randomColor, randomRgb()]); //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 rerendering the color when pressing the Button ... NOTE❗❗❗ the 3 dots '...' will look in to the created Array of colors and will add a new one and not mutate the existing one, because we dont want to mutate, but to add a new one
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }} //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 displaying the random colors when pressing the Button
      />
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Page"
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`; //creating the random RBG
}; //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 creating the random colors

const styles = StyleSheet.create({});

export default ColorScreen;
