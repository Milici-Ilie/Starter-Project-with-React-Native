import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"; //📃📃[BUILDING LISTS]📃📃 note that the 'FlatList' is responsible for creating the List componen with names/text/etc

//📃📃[BUILDING LISTS]📃📃
const ListScreen = () => {
  const friends = [
    { name: "Friend #1", Age: "20" },
    { name: "Friend #2", Age: "45" },
    { name: "Friend #3", Age: "32" },
    { name: "Friend #4", Age: "27" },
    { name: "Friend #5", Age: "53" },
    { name: "Friend #6", Age: "30" },
    { name: "Friend #7", Age: "33" },
    { name: "Friend #8", Age: "42" },
    { name: "Friend #9", Age: "11" },
  ]; //📃📃[BUILDING LISTS]📃📃 there are 2 ways of adding a 'key' propertie, 1🔑 is to add the 'key' here in the 'friends' variable

  return (
    <FlatList
      horizontal={false} //this will display our list horizontal and create a scrool effect for them
      showsHorizontalScrollIndicator={false} //this will hide the horizontal scroll indicator
      keyExtractor={(friend) => friend.name} //📃📃[BUILDING LISTS]📃📃 this is the 2. nd second way of displaying the 'key'🔑🔑 property
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        ); //item is connected to our Array witch means we can call all the names from our 'friends' variable array/objects
      }}
    />
  ); //📃📃[BUILDING LISTS]📃📃 we need to create an Array where we implement our data and at the end as you can see we need to call the <FlatList/>
  //also note that the {element} is equal to === {item: {name: 'Friend #1'}, index: 0}. It contains the and item: witch contains and object with the first object from 'friends' variable array and also it contains an 'index' for every element ... this will be the result if you replace the {item} with (element), if you want only the {item} than there will be displayed only the 'name' in our case
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40, //this will add a vertical gap of '50'
    marginHorizontal: 15,
  },
}); //creating some styles for our list

export default ListScreen;
