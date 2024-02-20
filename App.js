import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"; //🍮🍮[CUSTOM COMPONENTS]🍮🍮 importing the file

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  //🍮🍮[CUSTOM COMPONENTS]🍮🍮 here we need to implement our new component/file. ex: Components: etc...
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
    //🍮🍮[CUSTOM COMPONENTS]🍮🍮 here we tell the App what page/file to display first. 'initialRouteName' is responsible for this thing, what file we specifie after this that will be displayed in our App first
  }
);

export default createAppContainer(navigator);
