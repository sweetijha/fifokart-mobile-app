import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
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
import navController from '../../controllers/navController';

const CustomHeader = props => {
  const {page, heading, cart, backButton} = props;
  return (
    <Header style={{backgroundColor: 'white', display: 'flex'}}>
      {backButton ? (
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            marginRight: 20,
          }}>
          <Icon
            name="arrow-left"
            color={'#384850'}
            size={30}
            onPress={() => navController.goBack()}
          />
        </View>
      ) : null}
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
      {cart ? (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
          onPress={() => navController.navigate('Cart', {})}>
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
        </TouchableOpacity>
      ) : null}
    </Header>
  );
};

export default CustomHeader;
