import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

//🚼🚼[MULTIPLE RERENDERS]🚼🚼 now we are reuse the 'ColorCounter.js' file and make some changes with the 'props'
const SquareScreen = (props) => {
  //the notes for 'IF and Else' statement are missing, also the 'ternary operator', i deleted them accidentaly ... check another lessons where you can see those implementations❗❗❗❗
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        //🐢🐢[TERNARY OPERATION]🐢🐢here we are passing in the function the first argument as 'red', because if the 'color' from our function is === 'red', from the  <ColorCounter/> than will apply the function condition to that buttons and not to another color
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        //🐢🐢[TERNARY OPERATION]🐢🐢 'COLOR_INCREMENT' is a positiv value '15', but we need it to be negative in our case when we press the button, so we need to drecrease it with '-1'
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
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
