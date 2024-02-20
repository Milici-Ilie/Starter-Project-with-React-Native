import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"; //📃📃[BUILDING LISTS]📃📃 note that the 'FlatList' is responsible for creating the List componen with names/text/etc

//📃📃[BUILDING LISTS]📃📃
const ListScreen = () => {
  const friends = [
    { name: "Friend #1", key: "1" },
    { name: "Friend #2", key: "2" },
    { name: "Friend #3", key: "3" },
    { name: "Friend #4", key: "4" },
    { name: "Friend #5", key: "5" },
    { name: "Friend #6", key: "6" },
    { name: "Friend #7", key: "7" },
    { name: "Friend #8", key: "8" },
    { name: "Friend #9", key: "9" },
  ]; //📃📃[BUILDING LISTS]📃📃 there are 2 ways of adding a 'key' propertie, 1🔑 is to add the 'key' here in the 'friends' variable

  return (
    <FlatList
      keyExtractor={(friend) => friend.name} //📃📃[BUILDING LISTS]📃📃 this is the 2. nd second way of displaying the 'key'🔑🔑 property
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>; //item is connected to our Array witch means we can call all the names from our 'friends' variable array/objects
      }}
    />
  ); //📃📃[BUILDING LISTS]📃📃 we need to create an Array where we implement our data and at the end as you can see we need to call the <FlatList/>
  //also note that the {element} is equal to === {item: {name: 'Friend #1'}, index: 0}. It contains the and item: witch contains and object with the first object from 'friends' variable array and also it contains an 'index' for every element ... this will be the result if you replace the {item} with (element), if you want only the {item} than there will be displayed only the 'name' in our case
};

const styles = StyleSheet.create({});

export default ListScreen;
