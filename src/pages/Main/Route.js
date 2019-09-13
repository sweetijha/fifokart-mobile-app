import {createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Products from './Products';
import Orders from './Orders';

export default createMaterialBottomTabNavigator(
  {
    Products: {screen: Products},
    Orders: {screen: Orders},
  },
  {
    initialRouteName: 'Orders',
    activeTintColor: '#ff0000',
  },
);
