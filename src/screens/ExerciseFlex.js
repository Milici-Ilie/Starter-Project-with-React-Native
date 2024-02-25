import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//🔬🔬[LAYOUT SYSTEM]🔬🔬
const ExerciseFlex = ({ navigation }) => {
  return (
    <View style={styles.parent}>
      <View style={styles.parent2}>
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
      <View style={styles.box4} />
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // parent: { flexDirection: "column", height: 300 },
  parent2: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    // width: 20,
    // justifyContent: "space-between",
    // backgroundColor: "red",
    // borderColor: "red",
    // borderWidth: 4,
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  box3: { height: 100, width: 100, backgroundColor: "blue" },
  box4: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    display: "flex",
    alignSelf: "center",
  },
});

export default ExerciseFlex;
