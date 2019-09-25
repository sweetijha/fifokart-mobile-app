/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, H3, Button} from 'native-base';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductList = props => {
  const {list} = props;
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
        source={{
          uri: 'http://develop.fifokart.in/bisleri.png',
        }}
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
            color: '#0E65B3',
            width: '50%',
            textAlign: 'right',
            fontSize: 16,
            fontWeight: '600',
          }}>
          <Icon name="currency-inr" color={'#0E65B3'} size={16} />
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
