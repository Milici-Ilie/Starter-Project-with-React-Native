import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

//🚼🚼[MULTIPLE RERENDERS]🚼🚼 now we are reuse the 'ColorCounter.js' file and make some changes with the 'props'
const SquareScreen = (props) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0); //passing the props State to the children component 'ColorCounter.js' file
  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      {/* Now we must sent also the props 'onIncrease and onDecrease' */}
      <Text></Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }} //🚼🚼[MULTIPLE RERENDERS]🚼🚼 creating the function for changing multiple actions when pressing the buttons
      />
      <Text></Text>
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Go to Home Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
