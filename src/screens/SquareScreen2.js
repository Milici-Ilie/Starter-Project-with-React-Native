import React, { useReducer } from "react";//🏮🏮[REDUCER]🏮🏮 importing 'useReducer'
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = (props) => {
  
  return (
    <View>
      <ColorCounter
        onIncrease={() => >}
        //🐢🐢[TERNARY OPERATION]🐢🐢here we are passing in the function the first argument as 'red', because if the 'color' from our function is === 'red', from the  <ColorCounter/> than will apply the function condition to that buttons and not to another color
        onDecrease={() => >}
        
        color="Red"
      />
      <ColorCounter
        onIncrease={() => >}
        onDecrease={() => >}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => >}
        onDecrease={() => >}
        color="Green"
      />
      {/* Now we must sent also the props 'onIncrease and onDecrease' */}
      <Text></Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }} />
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
