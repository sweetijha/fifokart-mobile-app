import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../pages/Home';
import Route from '../pages/Main/Route';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: Home},
      Product: {screen: Route},
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default AppNavigator;
