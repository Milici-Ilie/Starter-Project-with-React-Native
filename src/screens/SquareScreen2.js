import React, { useReducer } from "react"; //🏮🏮[REDUCER]🏮🏮 importing 'useReducer'
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state==={red: number, green: number, blue: number};
  //action === {colorToChange: 'red' || "green" || "blue", amount: 15 || -15 }; this is not a valid JS, just a reminder of what 'action' state should do

  //conveniece by developers: // action === {type: "change_red" || "change_green" || "change_blue", payload: 15}
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      } //here we created the Ternary Operator, validation that checks if is above or bellow some value that we set
      return { ...state, red: state.red + action.amount }; //never mutate the state, array, object, etc. But rebuild the entire state object ... NOTE❗❗❗ by desctructuring the '...state', we take the 'red' value and create a new one, but not mutate the original one, it's just a copy of the original, where we add the new changes, state.red + action.amount
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state; // used in case there are some invalid values
  } //🏮🏮[REDUCER]🏮🏮 the reducer function ... the (state) object are the the object from bellow {red, green, blue}// // the second object (state, action), 'action' has the rolle of 'how to change the first state' ===similar with the 'useState' logic where we have also 2 state, for ex: [state, setState]=useState();
};

const SquareScreen = (props) => {
  const [state, runMyReducer] = useReducer(reducer, {
    //convenience. 'runMyReducer' = dispatch
    red: 0,
    green: 0,
    blue: 0,
  }); //🏮🏮[REDUCER]🏮🏮 all the 3 values of 'red, green and blue' are stored in the 'state' value from this variable [state, dispatch] ////// the 'reducer' that we use here is the 'reducer' variable from above where we implemented the logic for this
  //console.log(state)// {red:0, green: 0,blue:0}
  // in 'runMyReducer' we will pass the value that we want to be passed up in the 'reducer' variable in the 'action' state, the 'action' state than will change the 'state' itself wich will activate the logic inside if the entire 'switch ... case' above we are passing the argue for the 'runMyReduceer', NOTE that the 'runMyReducer' can have any name, normally this must be named 'dispatch'
  const { red, green, blue } = state; //creating a destructured variable for 'state' where we take the solo values

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        //🐢🐢[TERNARY OPERATION]🐢🐢here we are passing in the function the first argument as 'red', because if the 'color' from our function is === 'red', from the  <ColorCounter/> than will apply the function condition to that buttons and not to another color
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      {/* Now we must sent also the props 'onIncrease and onDecrease' */}
      <Text></Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }} // need to pass the 'state.'
      />
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
