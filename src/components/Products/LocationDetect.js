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
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationDetect = () => {
  return (
    <View style={{flex: 1}}>
      <InputGroup borderType="underline">
        <Icon name="map-marker-outline" color={'#384850'} size={30} />
        <Input placeholder="Type your text here" />
      </InputGroup>
    </View>
  );
};

export default LocationDetect;
