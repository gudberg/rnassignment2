import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
});

export default HomeStack;
