import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../pages/Home';
import Main from '../pages/Main';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: Home},
      Main: {screen: Main},
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default AppNavigator;
