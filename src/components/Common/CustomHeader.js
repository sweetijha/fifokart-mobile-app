import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  Badge,
  Form,
  Picker,
  Item,
  H3,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../../assets/svgs/cart';
import LocationDetect from '../Products/LocationDetect';

const CustomHeader = props => {
  const {page, heading} = props;
  return (
    <Header style={{backgroundColor: 'white', display: 'flex'}}>
      {page === 'PRODUCT' ? (
        <LocationDetect />
      ) : (
        <H3
          style={{
            flex: 1,
            paddingTop: 20,
          }}>
          {heading}
        </H3>
      )}
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Badge
          primary
          style={{
            position: 'absolute',
            top: 5,
            right: -5,
            width: 20,
            height: 20,
          }}>
          <Text style={{fontSize: 12, color: 'white'}}>2</Text>
        </Badge>
        <Icon name="cart-outline" color={'#384850'} size={30} />
      </View>
    </Header>
  );
};

export default CustomHeader;
