import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

//🚼🚼[MULTIPLE RERENDERS]🚼🚼 now we are reuse the 'ColorCounter.js' file and make some changes with the 'props'
const SquareScreen = (props) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0); //passing the props State to the children component 'ColorCounter.js' file
  const COLOR_INCREMENT = 15;

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +15, -15

    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
        //this is an 'if' 'else' statement
      } //setColor poate avea orice valoare ca parametru, nu doar COLOR_INCREMENT. Sintaxa setColor(color, change) spune doar că funcția primește doi parametri: color și change. === bellow we have a ternary operator  included in a 'switch' statement
    }

    switch (color) {
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  }; //🐢🐢[TERNARY OPERATION]🐢🐢 creating the variable for ternary operator, chacking if the value is greater or lower ... NOTE ❗❗❗ the 'color' term that we use is from bellow, in every <ColorCounter/> we will find a term 'color' witch represent a color=red, green or blue.

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
