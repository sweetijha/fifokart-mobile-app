/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  InputGroup,
  Input,
  Card,
  CardItem,
  H3,
  Button,
} from 'native-base';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const IMG_URL = {uri: 'http://localhost:4000/public/assets/images/logo.png'};

const ProductList = props => {
  const {list} = props;
  const Image_Http_URL = {
    uri: 'http://develop.fifokart.in/bisleri.png',
  };
  return list.map(item => (
    <View
      style={{
        width: '46%',
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 0,
        borderColor: '#fff',
      }}>
      <Image
        source={require('../../assets/bisleri.png')}
        style={{height: 150, width: '50%', resizeMode: 'cover', marginTop: 20}}
      />
      <H3 style={{textAlign: 'center', width: '100%'}}>Product Name</H3>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'red',
            width: '50%',
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
            fontSize: 16,
            fontWeight: '600',
          }}>
          <Icon name="currency-inr" color={'red'} size={16} />
          75
        </Text>
        <Text
          style={{
            color: 'blue',
            width: '50%',
            textAlign: 'right',
            fontSize: 16,
            fontWeight: '600',
          }}>
          <Icon name="currency-inr" color={'blue'} size={16} />
          70
        </Text>
      </View>
      <Button primary style={{width: '94%', margin: 0}}>
        <Text style={{textAlign: 'center', width: '100%'}}>Add To Cart</Text>
      </Button>
    </View>
  ));
};

export default ProductList;
