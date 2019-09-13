import React from 'react';
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
  Button,
} from 'react-native';

const Product = props => {
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput style={styles.location} placeholder="Location" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.vendorList} placeholder="Vendor List" />
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 10,
          }}>
          Products are below:
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              flex: 1,
              marginTop: 5,
            }}>
            Daily Special: Bisleri
          </Text>
          {/* <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          /> */}
          <Button title="Add" />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              flex: 1,
              marginTop: 5,
            }}>
            Daily Special: Bisleri
          </Text>
          {/* <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          /> */}
          <Button title="Add" />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              flex: 1,
              marginTop: 5,
            }}>
            Daily Special: Bisleri
          </Text>
          {/* <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          /> */}
          <Button title="Add" />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              flex: 1,
              marginTop: 5,
            }}>
            Daily Special: Bisleri
          </Text>
          {/* <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          /> */}
          <Button title="Add" />
        </View>
      </View>
      <View style={styles.checkout}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Cart');
          }}>
          <Text style={styles.loginText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    // width: deviceWidth - 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  location: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    color: 'white',
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  vendorList: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontSize: 20,
  },
  checkout: {
    backgroundColor: 'green',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '20%',
    // marginLeft: 10,
    // marginRight:10
  },
});
export default Product;
