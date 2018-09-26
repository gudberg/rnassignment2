import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
});

export default HomeStack;
