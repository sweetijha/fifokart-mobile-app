import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Home';
import navController from '../controllers/navController';
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
          navController.navigate('Signup');
        }}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navController.navigate('Login');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navController.navigate('Main');
          }}>
          <Text style={styles.skip}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
