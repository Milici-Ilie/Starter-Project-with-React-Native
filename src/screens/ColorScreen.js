import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

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
      {/* <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }} //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 displaying the random colors when pressing the Button
      /> */}
      <FlatList
        keyExtractor={(item) => item} // here we are adding unique Key to all the new contents, this key is the random RGB color wich will be unique
        data={randomColor}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }} //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 displaying the random colors when pressing the Button === NOTE!!! by replacing the 'randomRgb()' with 'item' will not rerender all the contents when we press the button 'Add a color', but will just add a new content with color
            />
          ); //here we are creating random colors and also adding new contents when the user is pressing the Button
        }} //The FLATLIST is need it to create a list where we can display multiple items
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
