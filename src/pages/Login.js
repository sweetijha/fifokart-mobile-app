import React, {useReducer, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import navController from '../controllers/navController';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {reducer, initialState} from '../service/reducer/user';
import {LOGIN} from '../service/constant';
import {userLogin} from '../service/saga/user';

const Login = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    let reqData = {phone: phone, password: password};
    try {
      let a = await userLogin(reqData);
      dispatch({type: LOGIN});
      navController.navigate('Main');
    } catch (e) {
      Alert.alert(e.message);
    }
  };
  const onStateChange = (name, val) => {
    console.log(name, val);
    switch (name) {
      case 'phone':
        setPhone(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        throw new Error();
    }
  };
  return (
    <View
      style={{flex: 1, backgroundColor: '#020d24', justifyContent: 'center'}}>
      <View style={styles.phoneInputView}>
        <Item floatingLabel>
          <Label>Phone</Label>
          <Input
            style={styles.phoneInput}
            placeholder="Phone"
            keyboardType="numeric"
            placeholderTextColor="#ffffff"
            value={phone}
            onChangeText={val => onStateChange('phone', val)}
          />
        </Item>
      </View>
      <View style={styles.passwordInputView}>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            style={styles.pwdInput}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            value={password}
            onChangeText={val => onStateChange('password', val)}
          />
        </Item>
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          onPress={() => {
            login();
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgetPassword');
          }}>
          <Text style={styles.forgetPwd}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInputView: {
    // width: deviceWidth - 20,
    marginLeft: 20,
    marginRight: 20,
  },
  passwordInputView: {
    // width: deviceWidth - 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  phoneInput: {
    height: 40,
    color: 'white',
    width: '100%',
    marginTop: 15,
  },
  pwdInput: {
    height: 40,
    color: 'white',
    width: '100%',
    marginTop: 15,
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
  forgetPwd: {
    color: '#2782d2',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Login;
