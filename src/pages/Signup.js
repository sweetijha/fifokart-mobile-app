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
import navController from '../controllers/navController';
const backgroundImage = '../Images/background.jpg';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Signup = props => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#020d24', justifyContent: 'center'}}>
      {/* <ImageBackground
        source={require(backgroundImage)}
        resizeMode="cover"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}> */}
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Name"
          keyboardType="default"
          placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone"
          keyboardType="numeric"
          placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.pwdInput}
          placeholder="Confirm Password"
          keyboardType="default"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          onPress={() => {
            navController.navigate('Main');
          }}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

Signup.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  phoneInputView: {
    // width: deviceWidth - 20,
    marginLeft: 20,
    marginRight: 20,
  },
  phoneInput: {
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40,
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    marginTop: 15,
  },
  pwdInput: {
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40,
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 10,
  },
  submitButton: {
    // width: deviceWidth - 20,
    backgroundColor: '#2782d2',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    opacity: 0.8,
    marginTop: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});

export default Signup;
