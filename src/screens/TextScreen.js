import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native"; //💉💉[INPUT TEXT]💉💉 need to import 'TextInput' for making this to work

const TextScreen = ({ navigation }) => {
  const [name, setName] = useState(""); //💉💉[INPUT TEXT]💉💉

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name} //💉💉[INPUT TEXT]💉💉
        onChangeText={(newValue) => setName(newValue)} //💉💉[INPUT TEXT]💉💉
      />
      {/* 💉💉[INPUT TEXT]💉💉 all the time when we are using the 'TextInput' propertie we need to style it to be visible on the screen, because by default this comes with 0 style, meaning is almost impossible to see it, even if he is there and can be used, so we need to configure the 'styles' from bellow 👇 and use it */}
      {/* <Text>Password must be longer then 5 characters{name}</Text> */}
      {name.length <= 5 ? (
        <Text>Password must be longer then 5 characters</Text>
      ) : null}
      {/* here we are creating the condition that check is our Input Text is longer than 5, if so than display what content we need, otherwise display nothing/null. To check if the length of our inputed text is longer than 5, we must directly use the 'name' wich store all the final data/text imputed */}
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Text Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
