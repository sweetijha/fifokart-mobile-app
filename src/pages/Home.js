import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import styles from '../styles/Home';
const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#020d24',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          props.navigation.navigate('Signup');
        }}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Main');
          }}>
          <Text style={styles.skip}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
