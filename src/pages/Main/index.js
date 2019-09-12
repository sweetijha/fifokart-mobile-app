import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Products from './Products';
import Orders from './Orders';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default createMaterialBottomTabNavigator(
  {
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="tint" size={20} color={focused ? '#ff0000' : '#DACE91'} />
        ),
      },
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="clipboard-list"
            size={20}
            color={focused ? '#ff0000' : '#DACE91'}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="user-alt"
            size={20}
            color={focused ? '#ff0000' : '#DACE91'}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Products',
    activeTintColor: '#ff0000',
  },
);
