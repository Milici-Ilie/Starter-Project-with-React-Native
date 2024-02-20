import React from "react";
import { Text, StyleSheet, View, Button } from "react-native"; //🧈🧈[BUTTON TYPES]🧈🧈 importing the 'View' and 'Button'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        My first attent to create a native mobile app.
      </Text>
      <Button title="Go to Components Demo" />
    </View> //🧈🧈[BUTTON TYPES]🧈🧈 Button
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
