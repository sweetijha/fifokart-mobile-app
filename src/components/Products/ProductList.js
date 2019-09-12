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
  View,
  Text,
  StatusBar,
  InputGroup,
  Input,
  Card,
  CardItem,
} from 'native-base';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductList = props => {
  const {list} = props;
  return list.map(item => (
    <View style={{width: '50%', padding: 5}}>
      <Card>
        <CardItem>
          <Image
            style={{height: 100}}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/9/91/F-15_vertical_deploy.jpg',
            }}
          />
        </CardItem>
      </Card>
    </View>
  ));
};

export default ProductList;
