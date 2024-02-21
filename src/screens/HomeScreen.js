import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"; //🧈🧈[BUTTON TYPES]🧈🧈 importing the 'View' and 'Button'// Importingh also the 'TouchableOpacity' for a more complex Button

const HomeScreen = ({ navigation }) => {
  //normaly we can call up in the (...here...) the word 'props' that we console.log bellow. But also we can destructurin the 'props' and call directly in the {...} for 'navigation', to spear some time, I think
  // console.log(props);
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>
        My first attent to create a native mobile app.
      </Text>
      <Button
        onPress={() => navigation.navigate("Components")} //🧭🧭[NAVIGATION]🧭🧭 this is how we create the connection/navigation between pages..... NOTE!!! that the 'navigation' and 'navigate' can be found in the 'console.log(props)' and 'console.log(props.navigation)'
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Page"
      />

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Page"
      />

      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter App"
      />
      {/* 🗽🗽[COUNTER-PROPS & STATE]🗽🗽 */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View> //🧈🧈[BUTTON TYPES]🧈🧈 1.Button way 2. TouchableOpacity
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
