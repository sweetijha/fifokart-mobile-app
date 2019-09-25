import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import Address from '../pages/Address';
import AddAddress from '../pages/AddAddress';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: Home},
      Main: {screen: Main},
      Cart: {screen: Cart},
      Address: {screen: Address},
      AddAddress: {screen: AddAddress},
      Signup: {screen: Signup},
      Login: {screen: Login},
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
