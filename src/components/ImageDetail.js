import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"; //🗻🗻[DISPLAYING IMAGES]🗻🗻 'Image'to immport images

//🌠🌠[DIFFERENT COMPONENTS]🌠🌠 this is how we use the 'props'... if we check the 'console.log' we will see that there are multiple objects that contains the prop 'title', meaning the unique description that we give to those 2 contents in the 'ImageScreen.js' file
const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      {/* 🗻🗻[DISPLAYING IMAGES]🗻🗻 summoning images with the path of the source ... NOTE❗❗❗ that the 'imageSourse' is coming from the (props) witch is connected with the parent file 'ImageScreen.js'*/}
      <Text>{props.title}</Text>
      <Text>Image Score - {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
