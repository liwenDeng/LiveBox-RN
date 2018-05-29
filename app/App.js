/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './pages/Home/Home.js';
import LiveScreen from './pages/Live/Live.js';
import CategoryScreen from './pages/Category/Category.js';
import MyScreen from './pages/My/My.js'

const HomeStack = createStackNavigator(
  {
    HomeScreen:HomeScreen,
  },
);

const LiveStack = createStackNavigator(
  {
    LiveScreen: LiveScreen,
  },
);

const CategoryStack = createStackNavigator(
  {
    CategoryScreen: CategoryScreen,
  },
);

const MyStack = createStackNavigator(
  {
    MyScreen: MyScreen,
  },
)

export default App = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    LiveTab: LiveStack,
    CategoryTab: CategoryStack,
    MyTab: MyStack,
  },
);
