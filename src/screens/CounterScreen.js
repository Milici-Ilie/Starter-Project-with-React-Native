import React, { useState } from "react"; //🗽🗽[COUNTER-PROPS & STATE]🗽🗽 always need {useState} when we have to rerender some data in our APP
import { View, Text, StyleSheet, Button } from "react-native";

//🗽🗽[COUNTER-PROPS & STATE]🗽🗽 dont forget to pass the prop '{navigation}', otherwise the button to go back at the Home page wont work
const CounterScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0); // calling the State for rerendering ... this is how we rerender data/info's state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
        // 🗽🗽[COUNTER-PROPS & STATE]🗽🗽 creating the responsible function of increasing the counter ... NOTE❗❗❗ 'setCounter' will dirrectly make changes to the 'counter' State wich is displayed in our App
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }} //same thing, but now for decreasing
      />
      <Text>Current count: {counter}</Text>

      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
