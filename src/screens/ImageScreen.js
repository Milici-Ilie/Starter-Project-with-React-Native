import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

//🌠🌠[DIFFERENT COMPONENTS]🌠🌠 down you can see how we pass different informations using 'props' ===>>> NOTE❗❗❗ this is the PARENT file and the <ImageDetail/> is the child file/// we need to sent the prop 'title' to our 'ImageDetail.js'
const ImageScreen = ({ navigation }) => {
  return (
    //🗻🗻[DISPLAYING IMAGES]🗻🗻 down we summon the IMG's ... now we need to go back to 'ImageDetail.js' file ... NOTE ❗❗❗ from this file, the parent file we will sent to the children files the props, we summon the IMG's by calling {props.imageSource}. 'imageSource' can be any name that we want, for ex 'imagepath', etc.

    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />

      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go to Home Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
