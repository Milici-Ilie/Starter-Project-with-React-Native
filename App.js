import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"; //🍮🍮[CUSTOM COMPONENTS]🍮🍮 importing the file
import ListScreen from "./src/screens/ListScreen"; //📃📃[BUILDING LISTS]📃📃
import ImageScreen from "./src/screens/ImageScreen"; //🌠🌠[DIFFERENT COMPONENTS]🌠🌠
import CounterScreen from "./src/screens/CounterScreen"; //🗽🗽[COUNTER-PROPS & STATE]🗽🗽
import ColorScreen from "./src/screens/ColorScreen"; //🗽🗽[COUNTER-PROPS & STATE]🗽🗽
import SquareScreen2 from "./src/screens/SquareScreen2"; //🚼🚼[MULTIPLE RERENDERS]🚼🚼
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen2,
    Text: TextScreen,
    Box: BoxScreen,
  },
  //🍮🍮[CUSTOM COMPONENTS]🍮🍮 here we need to implement our new component/file. ex: Components: etc...
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
    //🍮🍮[CUSTOM COMPONENTS]🍮🍮 here we tell the App what page/file to display first. 'initialRouteName' is responsible for this thing, what file we specifie after this that will be displayed in our App first
  }
);

export default createAppContainer(navigator);
