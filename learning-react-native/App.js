import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AnotherComponent from './src/screens/AnotherComponent';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CountScreen from './src/screens/CountScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextHandleScreen from './src/screens/TextHandleScreen';
import RestaurantApp from './src/screens/restaurant/TimelineScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Another: AnotherComponent,
    List: ListScreen,
    Image: ImageScreen,
    Count: CountScreen,
    Colors: ColorsScreen,
    Square: SquareScreen,
    TextHandle: TextHandleScreen,

    RestaurantApp: RestaurantApp,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "David's App",
    },
  }
);

export default createAppContainer(navigator);
